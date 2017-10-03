require.config({
  baseUrl:'/',
  //配置路径别名
  paths:{
    //common
    aside:'js/common/aside',
    header:'js/common/header',
    //course
    cs_add:'js/course/add',
    cs_list:'js/course/list',
    cs_add_1:'js/course/course_add_step1',
    cs_add_2:'js/course/course_add_step2',
    cs_add_3:'js/course/course_add_step3',
    cs_ca_add:'js/course/category_add',
    cs_ca_list:'js/course/category_list',
    //home
    login:'js/home/login',
    repass:'js/home/repass',
    settings:'js/home/settings',
    // teacher
    tc_edit:'js/teacher/edit',
    tc_list:'js/teacher/list',
    // user
    us_list:'js/user/list',
    us_profile:'js/user/profile',

    //第三方包
    jquery:'lib/jquery/jquery.min',
    bootstrap:'lib/bootstrap/js/bootstrap.main',


    // 普通模块的输出和依赖配置
    shim:{
      bootstrap:{
        deps:['jquery']
      }
    }
  }
})

var  obj={
    '/':'index',
    //course
    '/html/course/add.html':cs_add,
    '/html/course/list.html':cs_list,
    '/html/course/course_add_step1.html':cs_add_1,
    '/html/course/course_add_step2.html':cs_add_2,
    '/html/course/course_add_step3.html':cs_add_3,
    '/html/course/category_add.html':cs_ca_add,
    '/html/course/category_list.html':cs_ca_list,
    //home
    '/html/home/login.html':login,
    '/html/home/repass.html':repass,
    '/html/home/settings.html':settings,
    //teacher
    'html/teacher/edit.html':tc_edit,
    'html/teacher/list.html':tc_list,
    //user
    'html/user/list.html':us_list,
    'html/user/profile.html':us_profile,
}
var path=obj[location.pathname];
require([path])