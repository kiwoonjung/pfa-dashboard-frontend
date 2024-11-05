// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/',
  WAREHOUSE: '/warehouse',
};

// ----------------------------------------------------------------------

export const paths = {
  faqs: '/faqs',
  minimalStore: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    // amplify: {
    //   signIn: `${ROOTS.AUTH}/amplify/sign-in`,
    //   verify: `${ROOTS.AUTH}/amplify/verify`,
    //   signUp: `${ROOTS.AUTH}/amplify/sign-up`,
    //   updatePassword: `${ROOTS.AUTH}/amplify/update-password`,
    //   resetPassword: `${ROOTS.AUTH}/amplify/reset-password`,
    // },
    // jwt: {
    //   signIn: `${ROOTS.AUTH}/jwt/sign-in`,
    //   signUp: `${ROOTS.AUTH}/jwt/sign-up`,
    // },
    // firebase: {
    //   signIn: `${ROOTS.AUTH}/firebase/sign-in`,
    //   verify: `${ROOTS.AUTH}/firebase/verify`,
    //   signUp: `${ROOTS.AUTH}/firebase/sign-up`,
    //   resetPassword: `${ROOTS.AUTH}/firebase/reset-password`,
    // },
    // auth0: {
    //   signIn: `${ROOTS.AUTH}/auth0/sign-in`,
    // },
    // supabase: {
    //   signIn: `${ROOTS.AUTH}/supabase/sign-in`,
    //   verify: `${ROOTS.AUTH}/supabase/verify`,
    //   signUp: `${ROOTS.AUTH}/supabase/sign-up`,
    //   updatePassword: `${ROOTS.AUTH}/supabase/update-password`,
    //   resetPassword: `${ROOTS.AUTH}/supabase/reset-password`,
    // },
    azure: {
      signIn: `/sign-in`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    two: `${ROOTS.DASHBOARD}two`,
    three: `${ROOTS.DASHBOARD}three`,
    warehouse: {
      root: `${ROOTS.WAREHOUSE}`,
      kit_list: `${ROOTS.WAREHOUSE}/kit/list`,
      create_kit: `${ROOTS.WAREHOUSE}/kit/create-kit`,
      disassemble_kit: `${ROOTS.WAREHOUSE}/kit/disassemble-kit`,
      receiving: `${ROOTS.WAREHOUSE}/receiving`,
      back_order: `${ROOTS.WAREHOUSE}/back-order`,
    },
    group: {
      root: `${ROOTS.DASHBOARD}group`,
      five: `${ROOTS.DASHBOARD}group/five`,
      six: `${ROOTS.DASHBOARD}group/six`,
    },
  },
};
