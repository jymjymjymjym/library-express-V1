$(function () {
    //初始化列表
    function initList() {
        $.ajax({
            url: "/books",
            type: 'get',
            dataType: 'json',    //响应的数据格式
            success: function (res) {
                var html = template('indexTpl', { arr: res });
                $('#tbody').html(html);

                //操作选项必须在列表渲染完后才能加事件
                $('tbody').find('tr').each(function (index, value) {  //注意这里jq的each遍历是index在前，
                    var td = $(value).find("td").eq(5);    //此外遍历each到的是DOM对象，得 $(item) 包住

                    td.find('a').eq(0).click(function () {
                        var id = $(this).parent().parent().find('td').eq(0).text();
                        toEdit(id)
                    })

                    td.find('a').eq(1).click(function () {
                        var id = $(this).parent().parent().find('td').eq(0).text();
                        delect(id);
                    })
                })
                //每当初始化完成（修改后）都要添加一遍添加按钮事件
                addBtn();
                //并且清空表单
                  //注意该方法不能清空隐藏域
            }
        })
    }
    initList();

    function addBtn() {
        $('#addbook').click(function () {
            var form = $('.dia');
            form[0].reset();
            form.slideDown(300)
            $('#btn').unbind('click').click(function () {
                $.ajax({
                    type: "POST",
                    url: "/books/book",
                    data: form.serialize(),  //jquery 提交到所有的表单数据的大招
                    success: function (res) {
                        if (res.flag = 1) {
                            form.slideUp()
                            initList();
                        }
                    }
                })
            })
        })
    }
    addBtn()


    function toEdit(id) {
        $.ajax({
            url: "/books/book/" + id,
            type: 'get',
            dataType: 'json',    //响应的数据格式
            success: function (res) {
                if (res.flag = 1) {
                    // console.log(res)  先把响应打印出来，然后再对响应继续操作
                    var $form = $(".dia");
                    $form.find('input[name=name]').val(res.name)
                    $form.find('input[name=autor]').val(res.autor)
                    $form.find('input[name=category]').val(res.category)
                    $form.find('input[name=descript]').val(res.descript)
                    $form.slideDown(300);

                    //先填充表单，然后对表单按钮"重新"绑定点击事件，使用unbind
                    $('#btn').unbind('click').click(function () {
                        $.ajax({
                            type: "put",
                            url: "/books/book",
                            data: $form.serialize()+'&id='+id,  //jquery 提交到所有的表单数据的大招
                            success: function (res) {
                                if (res.flag = 1) {
                                    console.log('修改成功')
                                    $form.slideUp()
                                    initList();
                                }else{
                                    console.log('修改失败')
                                }
                            }
                        })
                    })
                }
            }
        })
    }

    function delect(id) {
        $.ajax({
            url: "/books/book/" + id,
            type: 'delete',
            dataType: 'json',    //响应的数据格式
            success: function (res) {
                if (res.flag = 1) {
                    initList();
                }
            }
        })
    }
})