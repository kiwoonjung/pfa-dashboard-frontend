import axios from 'axios';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: CONFIG.serverUrl });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong!')
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args) => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance.get(url, { ...config });

    return res.data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
};

// ----------------------------------------------------------------------

export const endpoints = {
  chat: '/api/chat',
  kanban: '/api/kanban',
  calendar: '/api/calendar',
  auth: {
    me: '/api/auth/me',
    signIn: '/api/auth/sign-in',
    signUp: '/api/auth/sign-up',
  },
  mail: {
    list: '/api/mail/list',
    details: '/api/mail/details',
    labels: '/api/mail/labels',
  },
  post: {
    list: '/api/post/list',
    details: '/api/post/details',
    latest: '/api/post/latest',
    search: '/api/post/search',
  },
  product: {
    list: '/api/product/list',
    details: '/api/product/details',
    search: '/api/product/search',
  },
};

// ---------------------------------------------------------------------

export const kitList = [
  {
    label: 'K-BC-LV1',
    code: '7000000258',
  },
  {
    label: 'K-BC-LV2-NB',
    code: '7000000259',
  },
  {
    label: 'K-BC-LV2-PC',
    code: '7000000260',
  },
  {
    label: 'K-BC-LV2',
    code: '7000000261',
  },
  {
    label: 'K-BC-LV3-NB',
    code: '7000000262',
  },
  {
    label: 'K-BC-LV3-TB',
    code: '7000000263',
  },
  {
    label: 'K-BC-LV3',
    code: '7000000264',
  },
  {
    label: 'K-BC-LV3OK',
    code: '7000000265',
  },
  {
    label: 'K-BC-PK',
    code: '7000000266',
  },
  {
    label: 'K-CSA-PK',
    code: '7000000267',
  },
  {
    label: 'K-CSA-T2BK-M',
    code: '7000000268',
  },
  {
    label: 'K-CSA-T2BK-S',
    code: '7000000269',
  },
  {
    label: 'K-CSA-T3IK-L',
    code: '7000000270',
  },
  {
    label: 'K-CSA-T3IK-M',
    code: '7000000271',
  },
  {
    label: 'K-CSA-T3IK-S',
    code: '7000000272',
  },
  {
    label: 'K-CUSTOM-A-WHK-L',
    code: '7000000273',
  },
  {
    label: 'K-CUSTOM-A-WHK',
    code: '7000000274',
  },
  {
    label: 'K-CUSTOM-CK',
    code: '7000000275',
  },
  {
    label: 'K-CUSTOM-GSK',
    code: '7000000276',
  },
  {
    label: 'K-CUSTOM-LK',
    code: '7000000277',
  },
  {
    label: 'K-CUSTOM-NH',
    code: '7000000278',
  },
  {
    label: 'K-CUSTOM-SSK',
    code: '7000000279',
  },
  {
    label: 'K-ONT-SCH(10)',
    code: '7000000280',
  },
  {
    label: 'K-ONT-SCH(8)',
    code: '7000000282',
  },
  {
    label: 'K-ONT-SCH(9)',
    code: '7000000283',
  },
  {
    label: 'K-PFA-72-EBK',
    code: '7000000284',
  },
  {
    label: 'K-PFA-72-SK-2',
    code: '7000000285',
  },
  {
    label: 'K-PFA-72-SK-3-HCR',
    code: '7000000286',
  },
  {
    label: 'K-PFA-72-SK-3',
    code: '7000000287',
  },
  {
    label: 'K-PFA-72-SK-4-HCR',
    code: '7000000288',
  },
  {
    label: 'K-PFA-72-SK-4',
    code: '7000000289',
  },
  {
    label: 'K-PFA-72-SK-AO',
    code: '7000000290',
  },
  {
    label: 'K-PFA-72-SK-HCR',
    code: '7000000291',
  },
  {
    label: 'K-PFA-72-SK-ISSBC-10',
    code: '7000000292',
  },
  {
    label: 'K-PFA-72-SK-ISSBC-5',
    code: '7000000293',
  },
  {
    label: 'K-PFA-72-SK',
    code: '7000000294',
  },
  {
    label: 'K-PFA-BC-BK',
    code: '7000000295',
  },
  {
    label: 'K-PFA-BLISTER',
    code: '7000000296',
  },
  {
    label: 'K-PFA-CK',
    code: '7000000298',
  },
  {
    label: 'K-PFA-CPRT',
    code: '7000000299',
  },
  {
    label: 'K-PFA-DK-P',
    code: '7000000300',
  },
  {
    label: 'K-PFA-FK-P',
    code: '7000000301',
  },
  {
    label: 'K-PFA-FS-P',
    code: '7000000302',
  },
  {
    label: 'K-PFA-HV',
    code: '7000000303',
  },
  {
    label: 'K-PFA-MK-P',
    code: '7000000304',
  },
  {
    label: 'K-PFA-OK',
    code: '7000000305',
  },
  {
    label: 'K-PFA-PK',
    code: '7000000306',
  },
  {
    label: 'K-PFA-SK',
    code: '7000000307',
  },
  {
    label: 'PFA-BC-19ADDON',
    code: '7000000308',
  },
  {
    label: 'PFA-BC-20ADDON',
    code: '7000000309',
  },
  {
    label: 'PFA-BC-DS-C',
    code: '7000000310',
  },
  {
    label: 'PFA-BC-DS',
    code: '7000000311',
  },
  {
    label: 'PFA-E72-S-2',
    code: '7000000312',
  },
  {
    label: 'PFA-R-VK-AST',
    code: '7000000313',
  },
  {
    label: 'PFA-TKIT',
    code: '7000000314',
  },
  {
    label: 'PFA-ABD-5x9-B',
    code: '7000000319',
  },
  {
    label: 'PFA-ABD-5x9-C',
    code: '7000000320',
  },
  {
    label: 'K-PFA-HP-L-PK-24',
    code: '731946187356',
  },
  {
    label: 'PFA-LAC-O-120',
    code: '7000000323',
  },
  {
    label: 'PFA-LAC-O-6',
    code: '7000000324',
  },
  {
    label: 'PFA-LAC-O-2',
    code: '7000000325',
  },
  {
    label: 'PFA-LAC-O-12',
    code: '7000000326',
  },
  {
    label: '5191-10',
    code: '7000000327',
  },
  {
    label: 'PFA-US-19-5',
    code: '7000000328',
  },
  {
    label: '8210-2',
    code: '7000000329',
  },
  {
    label: '8210-20',
    code: '7000000330',
  },
  {
    label: '8210-40',
    code: '7000000331',
  },
  {
    label: 'PFA-GNS500ml-4',
    code: '7000000332',
  },
  {
    label: '6268',
    code: '7000000333',
  },
  {
    label: 'PFA-WST-2',
    code: '7000000334',
  },
  {
    label: 'MM-05507-200',
    code: '7000000335',
  },
  {
    label: 'MM-05507-400',
    code: '7000000336',
  },
  {
    label: 'MM-05507-600',
    code: '7000000337',
  },
  {
    label: 'MM-05507-4000',
    code: '7000000338',
  },
  {
    label: 'NGX-014-CS-4',
    code: '7000000339',
  },
  {
    label: 'PUM-513/1-CS-4',
    code: '7000000340',
  },
  {
    label: 'WW-710-12',
    code: '7000000341',
  },
  {
    label: 'PFA-LAC-W-2',
    code: '7000000342',
  },
  {
    label: 'PFA-LAC-W-12',
    code: '7000000343',
  },
  {
    label: 'PFA-LAC-W-120',
    code: '7000000344',
  },
  {
    label: 'PFA-LAC-W-6',
    code: '7000000345',
  },
  {
    label: 'PFA-LAC-Y-2',
    code: '7000000350',
  },
  {
    label: 'PFA-LAC-Y-6',
    code: '7000000351',
  },
  {
    label: 'PFA-LAC-Y-12',
    code: '7000000352',
  },
  {
    label: 'PFA-LAC-Y-120',
    code: '7000000353',
  },
  {
    label: 'WW-910-PK-12',
    code: '7000000354',
  },
  {
    label: 'NTPA201X-2',
    code: '7000000355',
  },
  {
    label: 'PFA-SAL-15ML-BX-24',
    code: '7000000356',
  },
  {
    label: 'D0009-ENG-10',
    code: '7000000357',
  },
  {
    label: 'D0009-FRE-10',
    code: '7000000358',
  },
  {
    label: '3659-CS-50',
    code: '7000000359',
  },
  {
    label: '120C-6',
    code: '7000000360',
  },
  {
    label: '120C-10',
    code: '7000000361',
  },
  {
    label: '31246-50-BX-50',
    code: '7000000362',
  },
  {
    label: 'DX1000W-64',
    code: '7000000363',
  },
  {
    label: 'DX1000W-24',
    code: '7000000364',
  },
  {
    label: 'DX1000W-18',
    code: '7000000365',
  },
  {
    label: '529-PK',
    code: '7000000366',
  },
  {
    label: '149184-CS-4',
    code: '7000000367',
  },
  {
    label: '149184-CS-6',
    code: '7000000368',
  },
  {
    label: '158984-PK-3',
    code: '7000000371',
  },
  {
    label: '158984-PK-2',
    code: '7000000372',
  },
  {
    label: '464685-CS-2',
    code: '7000000373',
  },
  {
    label: '54344-CS-6',
    code: '7000000374',
  },
  {
    label: '61391-CS-4',
    code: '7000000375',
  },
  {
    label: '62618-CS-2',
    code: '7000000376',
  },
  {
    label: '67501-CS-2',
    code: '7000000377',
  },
  {
    label: '73264-CS-2',
    code: '7000000378',
  },
  {
    label: '67401-CS-2',
    code: '7000000379',
  },
  {
    label: 'PFA-HSB-PK-6',
    code: '7000000380',
  },
  {
    label: 'PFA-HSB-PK-12',
    code: '7000000381',
  },
  {
    label: '3659-BX-10',
    code: '7000000382',
  },
  {
    label: '126-01-BX-25',
    code: '7000000383',
  },
  {
    label: '126-01-BX-100',
    code: '7000000384',
  },
  {
    label: '06643-BX',
    code: '7000000385',
  },
  {
    label: '11130-PK-10',
    code: '7000000386',
  },
  {
    label: 'DX3600F-BX-20',
    code: '7000000388',
  },
  {
    label: 'DX3600F-BX-4',
    code: '7000000389',
  },
  {
    label: 'PFA-HSB-PK-24',
    code: '7000000390',
  },
  {
    label: 'PFA-GNS500ml-2',
    code: '7000000391',
  },
  {
    label: 'XFT-AED-A-PFA-10',
    code: '7000000392',
  },
  {
    label: 'A00-001-BX',
    code: '7000000393',
  },
  {
    label: 'DX1000W-12',
    code: '7000000397',
  },
  {
    label: '807739-PK',
    code: '7000000398',
  },
  {
    label: 'BC-012-CS-9',
    code: '7000000399',
  },
  {
    label: 'NGX-012-CS-4',
    code: '7000000400',
  },
  {
    label: '14363-PK',
    code: '7000000401',
  },
  {
    label: 'PFA-BLKF-50',
    code: '7000000402',
  },
  {
    label: 'PFA-HP-L-PK-6',
    code: '7000000403',
  },
  {
    label: 'PFA-HP-L-PK-4',
    code: '7000000404',
  },
  {
    label: 'C3-07121-40',
    code: '7000000406',
  },
  {
    label: 'Vit-thera-flex-combo',
    code: '7000000408',
  },
  {
    label: '67803-CS-2',
    code: '7000000409',
  },
  {
    label: 'PFA-BLFK-50-FBA',
    code: '7000000410',
  },
  {
    label: 'DX1000W-10',
    code: '7000000411',
  },
  {
    label: '03198-BX-50',
    code: '7000000412',
  },
  {
    label: 'B1-NTPA201X2-12',
    code: '7000000415',
  },
  {
    label: 'V-WL-MP-250-12',
    code: '7000000416',
  },
  {
    label: '11130-CS-150',
    code: '7000000417',
  },
  {
    label: '74500-CS-16',
    code: '7000000418',
  },
  {
    label: '31259-PK-12�',
    code: '7000000419',
  },
  {
    label: '31259-BX-24',
    code: '7000000420',
  },
  {
    label: '31246-50-PK-12',
    code: '7000000421',
  },
  {
    label: '1500-PK-2',
    code: '7000000422',
  },
  {
    label: '80-1677-0-PK-10',
    code: '7000000423',
  },
  {
    label: '80-1683-0-PK-2',
    code: '7000000424',
  },
  {
    label: 'PFA-GS500ml-4',
    code: '7000000425',
  },
  {
    label: 'PFA-GS500ml-2',
    code: '7000000426',
  },
  {
    label: 'DDC20-CS-4',
    code: '7000000427',
  },
  {
    label: 'AU50-CS-4�',
    code: '7000000428',
  },
  {
    label: 'DDC30-CS-3',
    code: '7000000429',
  },
  {
    label: 'DDEW40-CS-4',
    code: '7000000430',
  },
  {
    label: 'DDSLXL-C-S4',
    code: '7000000431',
  },
  {
    label: 'PVBNG-013CA-CS-4',
    code: '7000000432',
  },
  {
    label: 'NGX-013-CS-4',
    code: '7000000433',
  },
  {
    label: 'PF-514-CS-4',
    code: '7000000434',
  },
  {
    label: 'PF-513-CS-4',
    code: '7000000435',
  },
  {
    label: 'PUM-512/1-CS-4',
    code: '7000000436',
  },
  {
    label: 'PV-324-CS-4',
    code: '7000000437',
  },
  {
    label: 'PV-511-CS-4',
    code: '7000000438',
  },
  {
    label: 'PV-513-CS-4',
    code: '7000000439',
  },
  {
    label: 'PV-517-CS-4',
    code: '7000000440',
  },
  {
    label: 'PV-811-CS-9',
    code: '7000000441',
  },
  {
    label: 'PVB-012/2-CS-6',
    code: '7000000442',
  },
  {
    label: 'PVB-013/2-CS-4',
    code: '7000000443',
  },
  {
    label: 'PVH-418-CS-4',
    code: '7000000444',
  },
  {
    label: 'PVS-514-CS-4',
    code: '7000000445',
  },
  {
    label: '138049-PK-6',
    code: '7000000446',
  },
  {
    label: '54266-CS-4',
    code: '7000000447',
  },
  {
    label: 'PFA-COLDPACK-L-6',
    code: '7000000448',
  },
  {
    label: 'PFA-COLDPACK-L-12',
    code: '7000000449',
  },
  {
    label: 'PFA-COLDPACK-L-24',
    code: '7000000450',
  },
  {
    label: 'PFA-COLDPACK-S-12',
    code: '7000000451',
  },
  {
    label: 'PFA-COLDPACK-S-24',
    code: '7000000452',
  },
  {
    label: 'PFA-COLDPACK-S-36',
    code: '7000000453',
  },
  {
    label: 'PFA-COLDPACK-S-50',
    code: '7000000454',
  },
  {
    label: 'PFA-HP-L-CS-84',
    code: '7000000455',
  },
  {
    label: 'PFA-HP-M-PK-4',
    code: '7000000456',
  },
  {
    label: 'PFA-HP-M-CS-144',
    code: '7000000457',
  },
  {
    label: 'PFA-HP-S-PK-6',
    code: '7000000458',
  },
  {
    label: 'PFS-HP-S-CS-200',
    code: '7000000459',
  },
  {
    label: '3661-BX-10',
    code: '7000000460',
  },
  {
    label: '3661-CS-50',
    code: '7000000461',
  },
  {
    label: '8210-CS-160',
    code: '7000000462',
  },
  {
    label: '709600-PK-3',
    code: '7000000463',
  },
  {
    label: 'XFT-AED-C-10',
    code: '7000000464',
  },
  {
    label: 'XFT-AED-A-5',
    code: '7000000465',
  },
  {
    label: 'XFT-AED-A-20',
    code: '7000000466',
  },
  {
    label: 'XFT-AED-A-10',
    code: '7000000467',
  },
  {
    label: '80-1677-0-PK-25',
    code: '7000000468',
  },
  {
    label: 'APP0710-CS-4',
    code: '7000000469',
  },
  {
    label: 'PF-013/1-CS-4',
    code: '7000000470',
  },
  {
    label: 'PL-113/1-CS-6',
    code: '7000000471',
  },
  {
    label: 'PWC-513/1-CS-4',
    code: '7000000472',
  },
  {
    label: '69358-CS-2',
    code: '7000000473',
  },
  {
    label: '794768-PK-3',
    code: '7000000474',
  },
  {
    label: '794768-PK-6',
    code: '7000000475',
  },
  {
    label: 'K-PFA-CK-NB',
    code: '7000000476',
  },
  {
    label: 'A1110-BX-50',
    code: '7000000477',
  },
  {
    label: 'F2523760-BX-100',
    code: '7000000478',
  },
  {
    label: '62620-CS-2',
    code: '7000000479',
  },
  {
    label: 'PFA-ABD-8x10-BX-20',
    code: '7000000480',
  },
  {
    label: 'PFA-ABD-8x10-CS-400',
    code: '7000000481',
  },
  {
    label: 'PFA-VGLOVE-L-CS-10',
    code: '7000000482',
  },
  {
    label: 'PFA-VGLOVE-M-CS-10',
    code: '7000000483',
  },
  {
    label: 'PFNG-013-CS-4',
    code: '7000000484',
  },
  {
    label: 'PF-012/1-CS-4',
    code: '7000000485',
  },
  {
    label: 'PFA-SAB-1-BEI-BX-48',
    code: '7000000486',
  },
  {
    label: 'PFA-SAB-1-BLK-BX-48',
    code: '7000000487',
  },
  {
    label: 'PFA-SAB-1-MIX-BX-48',
    code: '7000000488',
  },
  {
    label: 'PFA-SAB-2-BEI-BX-24',
    code: '7000000489',
  },
  {
    label: 'PFA-SAB-2-BLK-BX-24',
    code: '7000000490',
  },
  {
    label: 'PFA-SAB-2-MIX-BX-24',
    code: '7000000491',
  },
  {
    label: 'PFA-SAB-3-BEI-BX-16',
    code: '7000000492',
  },
  {
    label: 'PFA-SAB-3-BLK-BX-16',
    code: '7000000493',
  },
  {
    label: 'PFA-SAB-3-MIX-BX-16',
    code: '7000000494',
  },
  {
    label: 'PFA-SAB-4-BEI-BX-12',
    code: '7000000495',
  },
  {
    label: 'PFA-SAB-4-BLK-BX-12',
    code: '7000000496',
  },
  {
    label: 'PFA-SAB-4-MIX-BX-12',
    code: '7000000497',
  },
  {
    label: 'PFA-SAB-LF-1-BEI-BX-48',
    code: '7000000498',
  },
  {
    label: 'PFA-SAB-LF-1-BLK-BX-48',
    code: '7000000499',
  },
  {
    label: 'PFA-SAB-LF-1-MIX-BX-48',
    code: '7000000500',
  },
  {
    label: 'PFA-SAB-LF-2-BEI-BX-24',
    code: '7000000501',
  },
  {
    label: 'PFA-SAB-LF-2-BLK-BX-24',
    code: '7000000502',
  },
  {
    label: 'PFA-SAB-LF-2-MIX-BX-24',
    code: '7000000503',
  },
  {
    label: 'PFA-SAB-LF-3-BEI-BX-16',
    code: '7000000504',
  },
  {
    label: 'PFA-SAB-LF-3-BLK-BX-16',
    code: '7000000505',
  },
  {
    label: 'PFA-SAB-LF-3-MIX-BX-16',
    code: '7000000506',
  },
  {
    label: 'PFA-SAB-LF-4-BEI-BX-12',
    code: '7000000507',
  },
  {
    label: 'PFA-SAB-LF-4-BLK-BX-12',
    code: '7000000508',
  },
  {
    label: 'PFA-SAB-LF-4-MIX-BX-12',
    code: '7000000509',
  },
  {
    label: 'PFA-SAB-1-BEI-CS-576',
    code: '7000000510',
  },
  {
    label: 'PFA-SAB-1-BLK-CS-576',
    code: '7000000511',
  },
  {
    label: 'PFA-SAB-1-MIX-CS-576',
    code: '7000000512',
  },
  {
    label: 'PFA-SAB-2-BEI-CS-288',
    code: '7000000513',
  },
  {
    label: 'PFA-SAB-2-BLK-CS-288',
    code: '7000000514',
  },
  {
    label: 'PFA-SAB-2-MIX-CS-288',
    code: '7000000515',
  },
  {
    label: 'PFA-SAB-3-BEI-CS-192',
    code: '7000000516',
  },
  {
    label: 'PFA-SAB-3-BLK-CS-192',
    code: '7000000517',
  },
  {
    label: 'PFA-SAB-3-MIX-CS-192',
    code: '7000000518',
  },
  {
    label: 'PFA-SAB-4-BEI-CS-144',
    code: '7000000519',
  },
  {
    label: 'PFA-SAB-4-BLK-CS-144',
    code: '7000000520',
  },
  {
    label: 'PFA-SAB-4-MIX-CS-144',
    code: '7000000521',
  },
  {
    label: 'PFA-SAB-LF-1-BEI-CS-576',
    code: '7000000522',
  },
  {
    label: 'PFA-SAB-LF-1-BLK-CS-576',
    code: '7000000523',
  },
  {
    label: 'PFA-SAB-LF-1-MIX-CS-576',
    code: '7000000524',
  },
  {
    label: 'PFA-SAB-LF-2-BEI-CS-288',
    code: '7000000525',
  },
  {
    label: 'PFA-SAB-LF-2-BLK-CS-288',
    code: '7000000526',
  },
  {
    label: 'PFA-SAB-LF-2-MIX-CS-288',
    code: '7000000527',
  },
  {
    label: 'PFA-SAB-LF-3-BEI-CS-192',
    code: '7000000528',
  },
  {
    label: 'PFA-SAB-LF-3-BLK-CS-192',
    code: '7000000529',
  },
  {
    label: 'PFA-SAB-LF-3-MIX-CS-192',
    code: '7000000530',
  },
  {
    label: 'PFA-SAB-LF-4-BEI-CS-144',
    code: '7000000531',
  },
  {
    label: 'PFA-SAB-LF-4-BLK-CS-144',
    code: '7000000532',
  },
  {
    label: 'PFA-SAB-LF-4-MIX-CS-144',
    code: '7000000533',
  },
  {
    label: '04284-BX-100',
    code: '7000000534',
  },
  {
    label: 'PFA-CONF-GAUZE-3-PK-10',
    code: '7000000535',
  },
  {
    label: 'PFA-CONF-GAUZE-2-PK-10',
    code: '7000000536',
  },
  {
    label: 'PFA-CONF-GAUZE-2-CS-120',
    code: '7000000537',
  },
  {
    label: 'PFA-CONF-GAUZE-3-CS-120',
    code: '7000000538',
  },
  {
    label: '6C019-BX-24',
    code: '7000000539',
  },
  {
    label: '3587-BX-12',
    code: '7000000540',
  },
  {
    label: '3587-CS-144',
    code: '7000000541',
  },
  {
    label: '3588-BX-6',
    code: '7000000542',
  },
  {
    label: '3588-CS-12',
    code: '7000000543',
  },
  {
    label: '3589-BX-4',
    code: '7000000544',
  },
  {
    label: '3589-CS-48',
    code: '7000000545',
  },
  {
    label: '03358-BX-25',
    code: '7000000546',
  },
  {
    label: '03358-BX-100',
    code: '7000000547',
  },
  {
    label: '3423-BX-100',
    code: '7000000548',
  },
  {
    label: '3423-CS-1200',
    code: '7000000549',
  },
  {
    label: '3434-BX-100',
    code: '7000000550',
  },
  {
    label: '3434-CS-1200',
    code: '7000000551',
  },
  {
    label: 'PFA-HOTPACK-L-BX-24',
    code: '7000000552',
  },
  {
    label: 'MDS138005-CS-24',
    code: '7000000553',
  },
  {
    label: 'D11055-PK-25',
    code: '7000000554',
  },
  {
    label: 'D11055-PK-100',
    code: '7000000555',
  },
  {
    label: 'D11055-CS-1000',
    code: '7000000556',
  },
  {
    label: '03035-BX-25',
    code: '7000000557',
  },
  {
    label: '03035-BX-100',
    code: '7000000558',
  },
  {
    label: '03197-BX-25',
    code: '7000000559',
  },
  {
    label: '03197-BX-100',
    code: '7000000560',
  },
  {
    label: '2500-BX-100',
    code: '7000000561',
  },
  {
    label: '2500-CS-1000',
    code: '7000000562',
  },
  {
    label: 'PFA-EB-2-PK-12',
    code: '7000000563',
  },
  {
    label: 'PFA-EB-2-CS-720',
    code: '7000000564',
  },
  {
    label: 'PFA-EB-3-PK-12',
    code: '7000000565',
  },
  {
    label: 'PFA-EB-3-CS-720',
    code: '7000000566',
  },
  {
    label: 'PFA-EB-4-PK-12',
    code: '7000000567',
  },
  {
    label: 'PFA-EB-4-CS-360',
    code: '7000000568',
  },
  {
    label: 'PFA-EB-6-PK-12',
    code: '7000000569',
  },
  {
    label: 'PFA-EB-6-CS-360',
    code: '7000000570',
  },
  {
    label: '3662-BX-10',
    code: '7000000571',
  },
  {
    label: '3663-BX-10',
    code: '7000000572',
  },
  {
    label: '3664-BX-10',
    code: '7000000573',
  },
  {
    label: '3666-BX-10',
    code: '7000000574',
  },
  {
    label: '3662-CS-50',
    code: '7000000575',
  },
  {
    label: '3663-CS-50',
    code: '7000000576',
  },
  {
    label: '3664-CS-50',
    code: '7000000577',
  },
  {
    label: '3666-CS-50',
    code: '7000000578',
  },
  {
    label: '8151-BX-50',
    code: '7000000579',
  },
  {
    label: 'PFA-PENL-PK-10',
    code: '7000000580',
  },
  {
    label: 'PFA-PENL-PK-5',
    code: '7000000581',
  },
  {
    label: '4304-BX-100',
    code: '7000000582',
  },
  {
    label: '4304-CS-1000',
    code: '7000000583',
  },
  {
    label: '4302-PK-100',
    code: '7000000584',
  },
  {
    label: '4302-CS-1000',
    code: '7000000585',
  },
  {
    label: '3562-PK-4',
    code: '7000000586',
  },
  {
    label: '3562-PK-6',
    code: '7000000587',
  },
  {
    label: '3562-BX-12',
    code: '7000000588',
  },
  {
    label: '3562-CS-144',
    code: '7000000589',
  },
  {
    label: '3563-PK-6',
    code: '7000000590',
  },
  {
    label: '3563-BX-12',
    code: '7000000591',
  },
  {
    label: '3563-CS-72',
    code: '7000000592',
  },
  {
    label: '3564-BX-4',
    code: '7000000593',
  },
  {
    label: '3571-BX-24',
    code: '7000000594',
  },
  {
    label: '3571-CS-1440',
    code: '7000000595',
  },
  {
    label: '3572-BX-12',
    code: '7000000596',
  },
  {
    label: '3572-CS-144',
    code: '7000000597',
  },
  {
    label: '3573-BX-6',
    code: '7000000598',
  },
  {
    label: '3573-CS-72',
    code: '7000000599',
  },
  {
    label: '82827-BX-24',
    code: '7000000600',
  },
  {
    label: 'BAXTJB1323-CS-24',
    code: '7000000601',
  },
  {
    label: 'BAXTJB1323-PK-12',
    code: '7000000602',
  },
  {
    label: '3596-BX-8',
    code: '7000000603',
  },
  {
    label: '3596-CS-32',
    code: '7000000604',
  },
  {
    label: '3597-BX-8',
    code: '7000000605',
  },
  {
    label: '3597-CS-32',
    code: '7000000606',
  },
  {
    label: '14348-BX-100',
    code: '7000000607',
  },
  {
    label: '14348-CS-1000',
    code: '7000000608',
  },
  {
    label: '3503-BX-24',
    code: '7000000609',
  },
  {
    label: '3503-CS-360',
    code: '7000000610',
  },
  {
    label: '3501-BX-20',
    code: '7000000611',
  },
  {
    label: '3501-CS-400',
    code: '7000000612',
  },
  {
    label: 'PFA-S-GAUZE-3X3-BX-100',
    code: '7000000613',
  },
  {
    label: 'PFA-S-GAUZE-3X3-CS-2000',
    code: '7000000614',
  },
  {
    label: 'PFA-S-GAUZE-4X4-BX-100',
    code: '7000000615',
  },
  {
    label: 'PFA-S-GAUZE-4X4-CS-2000',
    code: '7000000616',
  },
  {
    label: 'PFA-S-GAUZE-3X3-PK-25',
    code: '7000000617',
  },
  {
    label: 'PFA-S-GAUZE-4X4-PK-25',
    code: '7000000618',
  },
  {
    label: '3352-PK-25',
    code: '7000000619',
  },
  {
    label: '3352-BX-100',
    code: '7000000620',
  },
  {
    label: '67713-CS-8',
    code: '7000000621',
  },
  {
    label: '118-524-CS-50',
    code: '7000000622',
  },
  {
    label: 'P-ASSTB-25',
    code: '7000000623',
  },
  {
    label: 'PFA-PS-BDG-BX-100',
    code: '7000000624',
  },
  {
    label: 'PFA-FS-BDG-BX-100',
    code: '7000000625',
  },
  {
    label: 'PFA-FS-BDG-BX-10000',
    code: '7000000626',
  },
  {
    label: 'PFA-FK-BDG-BX-100',
    code: '7000000627',
  },
  {
    label: 'PFA-FK-BDG-CS-16000',
    code: '7000000628',
  },
  {
    label: 'PFA-PS-BDG-CS-10000',
    code: '7000000629',
  },
  {
    label: 'PFA-PS-BDG-BG-100',
    code: '7000000630',
  },
  {
    label: 'PFA-PS-BDG-CS-26400',
    code: '7000000631',
  },
  {
    label: 'P-ASSTB-50',
    code: '7000000632',
  },
  {
    label: 'PFA-FF-BDG-PK-100',
    code: '7000000633',
  },
  {
    label: 'PFA-FF-BDG-CS-14500',
    code: '7000000634',
  },
  {
    label: 'TEST1104-KIT',
    code: '7000000635',
  },
  {
    label: 'PFA-C-TBDG-BX-100',
    code: '7000000636',
  },
  {
    label: 'PFA-C-TBDG-CS-500',
    code: '7000000637',
  },
  {
    label: 'PFA-M-FORCEPS-CS-500',
    code: '7000000638',
  },
  {
    label: '1171-BX-144',
    code: '7000000639',
  },
  {
    label: '1171-CS-1728',
    code: '7000000640',
  },
  {
    label: 'PFA-PM-B-CS-100',
    code: '4000010575',
  },
  {
    label: 'PFA-PM-CS-60',
    code: '4000010573',
  },
];
