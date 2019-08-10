'use strict'

class SiteController {
    async index(){
        return{
            status:'ok!'
        }
    }
    async site(){
        return{
            name: 'My blog',
            logo: 'https://pbs.twimg.com/media/D-oFY_UUIAAU6jR?format=png&name=small',
            locale: "en-US", //OR zh-CN
            locale_switcher: true,
            menu: [
                {
                  name: 'home',
                  url: '/',
                  icon: 'fa fa-home'
                },
                {
                  name: 'content',
                  title: false
                },
                {
                  name: 'My posts',
                  url: 'rest/posts',
                  icon: 'fa fa-list'
                },
                {
                  name: 'Config',
                  url: '/form?uri=site/settings',
                  icon: 'fa fa-cogs'
                },
                {
                  name: 'Users',
                  url : '/rest/users',
                  icon: 'fa fa-users'
                },
                {
                  name: 'Logout',
                  url: '/login',
                  icon: 'fa fa-lock'
                }

                
                
            ]
        }
    }
}

module.exports = SiteController
