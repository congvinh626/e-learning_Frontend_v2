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
    name: 'Tổng quan',
    url: '/nha-thuoc/tong-quan',
    icon: '<i class="bi bi-cart"></i>',
  },

  {
    name: 'Bán hàng',
    url: '#',
    icon: '<i class="bi bi-cart"></i>',
    children: [
      {
        icon: '<i class="bi bi-cart-plus-fill"></i>',
        name: 'Tạo đơn hàng',
        url: '/nha-thuoc/404-not-found',
      },
      {
        icon: '<i class="bi bi-cart-plus-fill"></i>',
        name: 'Tạo đơn hàng',
        url: '/nha-thuoc/404-not-found',
      },
      {
        icon: '<i class="bi bi-cart-plus-fill"></i>',
        name: 'Tạo đơn hàng',
        url: '/nha-thuoc/404-not-found',
      },
    ]
  },

  {
    name: 'Hóa đơn',
    url: '#',
    icon: '<i class="bi bi-cart"></i>',
    children: [
      {
        icon: '<i class="bi bi-cart"></i>',

        name: 'Tạo đơn hàng',
        url: '/mMess/tao-don-hang',
      },
    ]
  },

  {
    name: 'Quản lý kho',
    url: '#',
    icon: '<i class="bi bi-cart"></i>',

  },


  {
    name: 'Đối tác',
    url: '#',
    icon: '<i class="bi bi-people"></i>',
    children: [
      {
        icon: '<i class="bi bi-person-check"></i>',
        name: 'Bác sĩ',
        url: '/nha-thuoc/danh-sach-bac-si',
      },
      {
        icon: '<i class="bi bi-people-fill"></i>',
        name: 'Khách hàng',
        url: '/nha-thuoc/danh-sach-khach-hang',
      },
      {
        icon: '<i class="bi bi-person-fill-gear"></i>',
        name: 'Nhà cung cấp',
        url: '/nha-thuoc/danh-sach-nha-cung-cap',
      },
    ]
  },


  {
    name: 'Sổ quỹ',
    url: '#',
    icon: '<i class="bi bi-cart"></i>',

  },


  {
    name: 'Báo cáo',
    url: '#',
    icon: '<i class="bi bi-cart"></i>',
    children: [
      {
        icon: '<i class="bi bi-cart"></i>',

        name: 'Tạo đơn hàng',
        url: '/mMess/tao-don-hang',
      },
    ]
  },
  {
    name: 'Nhân sự',
    url: '#',
    icon: '<i class="bi bi-cart"></i>',
    children: [
      {
        icon: '<i class="bi bi-cart"></i>',

        name: 'Tạo đơn hàng',
        url: '/mMess/tao-don-hang',
      },
    ]
  },

  {
    name: 'Danh mục',
    url: '#',
    icon: '<i class="bi bi-cart"></i>',
    children: [
      {
        icon: '<i class="bi bi-cart"></i>',

        name: 'Tạo đơn hàng',
        url: '/mMess/tao-don-hang',
      },
    ]
  },

  {
    name: 'Quản trị',
    url: '#',
    icon: '<i class="bi bi-gear-fill"></i>',
    children: [
      {
        icon: '<i class="bi bi-people"></i>',
        name: 'Quản lý tài khoản',
        url: '/nha-thuoc/quan-ly-tai-khoan',
      },
      {
        icon: '<i class="bi bi-person-gear"></i>',
        name: 'Vai trò',
        url: '/nha-thuoc/vai-tro',
      },
    ]
  },


]
