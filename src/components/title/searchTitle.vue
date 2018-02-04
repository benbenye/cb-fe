<template>
  <header class="category-header">
    <a href="javascript:{window.history.back();}" class="back"></a>
    <a href="#"
       class="search-cancel"
       cbclick="0-51">
      取消
    </a>
    <div class="search-btn"><span class="serarch-text">搜索春播商品</span></div>
    <div class="search-box">
      <input type="text"
             class="search"
             placeholder="搜索春播商品"
             id="search_key">
    </div>
  </header>
</template>

<script>
  import axios from 'axios';
  import {ec} from '../../util/index';
  
  export default {
    name: 'searchTitle',
    components: ec([]),
    data() {
      return {};
    },
    methods: {
      getHotSearchData: function () {

      },
      getSmartWord: function(){}
    }
  };
  
    $(function () {
        FastClick.attach(document.body);
        //搜索按钮
        $.ajax({
            url: '/Search/getHotSearchData/',
            dataType: 'json',
            success: function (data) {
                var e = eval(data)
                var words = e.hotWord;
                var specials = e.hotSpecial;
                var _word = '';
                var _special = '';
                for (i in words) {
                    _word += "<li><a href='/search/index?key=" + words[i]['guide_word'] + "&src=cb-search-hotsearch'>" + words[i]['guide_word'] + "</a></li>";
                }
                $(".search-hot").html(_word);

                for (i in specials) {
                    if (specials[i]['word'] != '') {
                        _special += "<li><a href='/act/" + specials[i]['special_id'] + "/?src=cb-search-hotspicial'>#" + specials[i]['word'] + "#</a></li>";
                    }
                }
                $(".search-theme").html(_special);

            }
        })
        $('#search_key').on('focus', function () {
            $(this).addClass('search-focus');
            search.act();
            search.get();
            if ($('.download-app').length)
                $('.search-res').addClass('do')
            if ($(this).val())
                $('.icon-del').show();

        }).on('blur', function () {
            $('.icon-del').hide();
            $(this).removeClass('search-focus');
        });
        $('#search_key').on('input', function () {
            if ($(this).val()) {
                $('.icon-del').show();
                // 请求关联词
                $.ajax({
                    url: '/Search/smartHotSearchOptionals/',
                    dataType: 'json',
                    data: {
                        key: $(this).val()
                    },
                    success: function (data) {
                        var e = eval(data);
                        var _words = '<ul>';
                        for (i in e) {
                            _words += "<li>" + e[i] + "</a></li>";
                        }
                        _words += '</ul>';
                        $(".associational-word").html(_words);

                    }
                })
                $('.associational-word').show();
            } else {
                $('.icon-del').hide()
                $('.associational-word').hide();
            }
        })
        var search = {
            'act': function () {
                $('.search-cancel,.search-res,.search-act').show();
                $('.back').hide();
                $('body').addClass('disableScorll');
                if ($("#category_level").val() > 1) {
                    $("#filter_div").hide();
                }
                $('.search-cancel').on('click', function (e) {
                    e.preventDefault();
                    $('#search_key').val('');
                    $('.search-cancel,.search-res,.search-act,.search-box').hide();
                    $('.associational-word').hide().find('ul').empty();
                    $('.search-act-icon,#site_area,.back').show();
                    $('body').removeClass('disableScorll');
                    if ($("#category_level").val() > 1) {
                        $("#filter_div").show();
                    }
                });
            },
            'word': localStorage.searchWord ? localStorage.searchWord.split(",") : [],
            'set': function (w) {
                if (w) {
                    for (var i = 0; i < this.word.length; i++) {
                        if (w == this.word[i]) {
                            this.word.splice(i, 1);
                        }
                    }
                    ;
                    this.word.push(w);
                    localStorage.searchWord = this.word;
                    // $('.search').val('');
                }
            },
            'get': function () {
                var $searchResUl = $('.search-res .search-his');
                var num = 15; //显示个数

                $searchResUl.html('');
                if (this.word.length > 0) {
                    for (var i = 0; i < this.word.length; i++) {
                        if (this.word.length < num || this.word.length - i <= num) {
                            var _text = this.word[i].length > 10 ? (this.word[i].substr(0, 8) + '...') : this.word[i];
                            $searchResUl.prepend('<li>' + _text + '</li>')
                        }
                    }
                    ;
                    var liLengthLineOneArr = [], liLengthLineTwoArr = [], text = [];
                    var searWidth = parseInt($('.search-his').css('width'));
                    var lineOneNotOverflow = lineTwoNotOverflow = true;
                    $searchResUl.find('li').each(function (i, e) {
                        var _liWidth = $(e).width() + parseInt($(e).css('margin-right')) * 2;
                        text.push($(e).text())
                        if (lineOneNotOverflow) {
                            lineOneNotOverflow = liLengthLineOneArr.reduce(function (a, b) {
                                return a + b
                            }, 0) + _liWidth < searWidth;
                            lineOneNotOverflow && liLengthLineOneArr.push(_liWidth);
                        }
                        if (!lineOneNotOverflow && lineTwoNotOverflow) {
                            lineTwoNotOverflow = liLengthLineTwoArr.reduce(function (a, b) {
                                return a + b
                            }, 0) + _liWidth < searWidth;
                            lineTwoNotOverflow && liLengthLineTwoArr.push(_liWidth);
                        }
                        return lineTwoNotOverflow;
                    });

                    $searchResUl.find('li').slice(liLengthLineTwoArr.length + liLengthLineOneArr.length, $searchResUl.find('li').length).remove();
                    $searchResUl.find('li').on('click', function () {
                        search.set($(this).text());
                        goto_search($(this).text());
                    });
                } else {
                    this.empty();
                }
            },
            'del': function () {
                localStorage.searchWord = [];
                this.word = [];
                this.get();
            },
            'empty': function () {
                if (this.word.length == 0) {
                    $('.search-res .search-his,.search-his-tit').hide();
                    $('.del-search-key').hide();
                }
            }
        }
        // search.get();
        $('.search-act').on('click', function (e) {
            e.preventDefault();
            goto_search();
            search.set($('#search_key').val());
        });
        $('.del-search-key').on('click', function (e) {
            e.preventDefault();
            search.del();
        });
        $('.search-act-icon,.search-btn').on('click', function (e) {

            $('.search-cancel,.search-box').show();
            $('#search_key').show().focus()
            $('.search-act-icon,#site_area').hide();
        });
        $('.associational-word').on('click', 'li', function () {
            search.set($(this).text());
            goto_search($(this).text());
        });

        $("#search_key").on("keydown", function (e) {
            var curKey = e.which;
            if (curKey == 13) {
                search.set($('#search_key').val());
                search.get();
                goto_search();
            }
        });
        $('body').on('tap', '.icon-del', function () {
            $('#search_key').val('').focus()
        })

        function goto_search(w) {
            if (w || $("#search_key").val().length > 0) {
                var search_key = w || $("#search_key").val();
                location.href = "/search/index?key=" + search_key;
            }
        }
    });

    function getCookie(c_name)
    {
        if (document.cookie.length > 0)
        {
            c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    }

    function setCookie(c_name, value, expiredays)
    {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) +
                ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    }


</script>

<style scoped lang="less" type="text/less">
  @import "title";
  @import "search";
</style>
