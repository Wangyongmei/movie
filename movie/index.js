/**
 * Created by user1 on 2017/2/15.
 */
$(function() {

    $(".banner_ol li").click(function () {
        alert(123);

        clearInterval(timer);

        var index = $(this).index();
        var src = "image/banner" + index + ".jpg";
        $(".banner_ul li").css({
            background: "url(images/banner0" + index + ".jpg)",
        });

        timer = setInterval(function () {

            if (index < 5) {

                $(".banner_ul li").css({
                    background: "url(images/banner0" + index + ".jpg)",
                });

                $(".banner_ol li a").each(function () {
                    $(this).css({
                        background: "#faf8fa",
                    })
                })

                $(".banner_ol li a").eq(index).css({

                    background: "rgb(236, 68, 63)",
                })

                index++;

            } else {

                index = 0;
            }


        }, 3000)


        $(".banner_ol li a").each(function () {
            $(this).css({
                background: "#faf8fa",
            })
        })

        $(this).find("a").css({
            background: "rgb(236, 68, 63)",
        })


    });


    var timer = 0;
    var i = 0
    timer = setInterval(function () {

        if (i < 5) {

            $(".banner_ul li").css({
                background: "url(images/banner0" + i + ".jpg)",
            });

            $(".banner_ol li a").each(function () {
                $(this).css({
                    background: "#faf8fa",
                })
            })

            $(".banner_ol li a").eq(i).css({

                background: "rgb(236, 68, 63)"
            })

            i++;

        } else {

            i = 0;
        }


    }, 3000)

})