const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
    />
  </svg>
);

export const navigationData = [
  {
    title: 'Manage Orders',
    icon: icon,
    path: '/manage-orders',
  },
  {
    title: 'Manage Products',
    icon: icon,
    path: '/manage-product',
  },
  {
    title: 'Products',
    icon: icon,
    path: '/add-product',
  },
  {
    title: 'Category',
    icon: icon,
    path: '/category',
  },
  {
    title: 'Subcategory',
    icon: icon,
    path: '/sub-category',
  },
  {
    title: 'Add Brand',
    icon: icon,
    path: '/add-brand',
  },
  {
    title: 'Add Coupon',
    icon: icon,
    path: '/add-coupon',
  },
  {
    title: 'Add Shop',
    icon: icon,
    path: '/add-shop',
  },
  {
    title: 'Add User ',
    icon: icon,
    path: '/add-user',
  },
  {
    title: 'Add Supplier ',
    icon: icon,
    path: '/add-supplier',
  },
];
