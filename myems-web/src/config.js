export const version = '3.12.0';
export const navbarBreakPoint = 'xl'; // Vertical navbar breakpoint
export const topNavbarBreakpoint = 'lg';
//export const APIBaseURL = 'http://127.0.0.1:8000';
export const APIBaseURL = window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/api";
export const settings = {
  isFluid: true,
  isRTL: false,
  isDark: true,
  isTopNav: true,
  isVertical: false,
  get isCombo() {
    return this.isVertical && this.isTopNav;
  },
  showBurgerMenu: false, // controls showing vertical nav on mobile
  currency: '¥',
  isNavbarVerticalCollapsed: false,
  navbarStyle: 'transparent',
  language: 'zh_CN', //zh_CN, en, de, fr, es, ru, ar, vi, th, tr, ms, id
  showOnlineMap: true
};
export default { version, navbarBreakPoint, topNavbarBreakpoint, settings, APIBaseURL };
