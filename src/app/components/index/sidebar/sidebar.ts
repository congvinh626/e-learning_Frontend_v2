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
    url: '#',
    icon: '<i class="bi bi-bookmark-check"></i>',
    roles: [ "teacher", "student"],

    children: [
      {
        icon: '<i class="bi bi-book"></i>',
        name: 'Khóa học của tôi',
        url: 'khoa-hoc',
        roles: [ "teacher", "student"],

      },
      {
        icon: '<i class="bi bi-plus-circle"></i>',
        name: 'Thêm khóa học',
        url: 'them-khoa-hoc',
        roles: ["student"],

      },
    ]
  },
 
  {
    name: 'Trang cá nhân',
    url: 'trang-ca-nhan',
    icon: '<i class="bi bi-cart"></i>',
  },


  {
    name: 'Quản trị',
    url: '#',
    icon: '<i class="bi bi-gear-fill"></i>',
    roles: ["admin"],

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
