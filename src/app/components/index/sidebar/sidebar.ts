export interface TypeRoute {
  name: string
  url?: string
  roles?: any
  hasChild?: boolean
  icon?: string
  children?: TypeRoute[]
}


export const ROUTE_DATA: TypeRoute[] = [

  {
    name: 'Trang chủ',
    url: '404-not-found',
    icon: '<i class="bi bi-cart"></i>',
  },

  {
    name: 'Khóa học',
    url: 'khoa-hoc',
    icon: '<i class="bi bi-cart"></i>',
   
  },

 
  {
    name: 'Trang cá nhân',
    url: '404-not-found',
    icon: '<i class="bi bi-cart"></i>',

  },


  {
    name: 'Quản trị',
    url: '#',
    icon: '<i class="bi bi-gear-fill"></i>',
    children: [
      {
        icon: '<i class="bi bi-people"></i>',
        name: 'Quản lý tài khoản',
        url: '404-not-found',
      },
      {
        icon: '<i class="bi bi-person-gear"></i>',
        name: 'Vai trò',
        url: '404-not-found',
      },
    ]
  },


]
