export function ColorStar({ width, height, color }: { width: number, height: number, color: string }) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 18 18" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.28516 0.764613C8.4587 0.361631 9.03007 0.361632 9.20362 0.764614L11.2994 5.63128C11.3718 5.79936 11.5302 5.91447 11.7125 5.93137L16.9886 6.42072C17.4255 6.46124 17.602 7.00464 17.2724 7.29422L13.2916 10.7913C13.1541 10.9121 13.0936 11.0984 13.1338 11.2769L14.2988 16.446C14.3953 16.874 13.933 17.2099 13.5558 16.9858L8.99967 14.2805C8.84231 14.1871 8.64647 14.1871 8.48911 14.2805L3.93302 16.9858C3.55575 17.2099 3.0935 16.874 3.18997 16.446L4.35498 11.2769C4.39522 11.0984 4.33471 10.9121 4.19721 10.7913L0.21638 7.29422C-0.11325 7.00464 0.063313 6.46124 0.500199 6.42072L5.77631 5.93137C5.95854 5.91447 6.11697 5.79936 6.18936 5.63128L8.28516 0.764613Z"
        fill={color} />
    </svg>
  )
}

export function NonColorStar({ width, height, color }: { width: number, height: number, color: string }) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 18 18" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.89548 1.24703C9.06903 0.844053 9.6404 0.844054 9.81394 1.24704L11.8429 5.95855C11.9153 6.12664 12.0737 6.24175 12.256 6.25865L17.3639 6.7324C17.8008 6.77292 17.9773 7.31632 17.6477 7.6059L13.7938 10.9915C13.6563 11.1123 13.5958 11.2986 13.636 11.4771L14.7639 16.4814C14.8604 16.9094 14.3981 17.2453 14.0208 17.0213L9.60999 14.4022C9.45263 14.3087 9.25679 14.3087 9.09943 14.4022L4.68858 17.0213C4.31131 17.2453 3.84907 16.9094 3.94554 16.4814L5.07341 11.4771C5.11365 11.2986 5.05313 11.1123 4.91564 10.9915L1.06171 7.6059C0.732077 7.31632 0.908641 6.77292 1.34553 6.7324L6.45344 6.25865C6.63567 6.24175 6.79411 6.12664 6.86649 5.95855L8.89548 1.24703Z"
        fill={color} />
    </svg>
  )
}

export function Search({ width, height, color }: { width: number, height: number, color: string }) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 30 30" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26.25 26.25L20.8213 20.8213M20.8213 20.8213C21.7499 19.8927 22.4865 18.7902 22.989 17.5769C23.4916 16.3637 23.7503 15.0633 23.7503 13.75C23.7503 12.4368 23.4916 11.1364 22.989 9.92308C22.4865 8.70979 21.7499 7.60737 20.8213 6.67876C19.8927 5.75015 18.7902 5.01354 17.5769 4.51098C16.3637 4.00842 15.0633 3.74976 13.75 3.74976C12.4368 3.74976 11.1364 4.00842 9.92308 4.51098C8.70979 5.01354 7.60737 5.75015 6.67876 6.67876C4.80335 8.55418 3.74976 11.0978 3.74976 13.75C3.74976 16.4022 4.80335 18.9459 6.67876 20.8213C8.55418 22.6967 11.0978 23.7503 13.75 23.7503C16.4022 23.7503 18.9459 22.6967 20.8213 20.8213Z"
        stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Notification({ width, height, color }: { width: number, height: number, color: string }) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.3313 17.9592C20.9298 17.3177 20.7167 16.5762 20.7163 15.8195V10.2158C20.7163 7.90411 19.798 5.68709 18.1634 4.05246C16.5288 2.41783 14.3117 1.49951 12 1.49951C9.68832 1.49951 7.47129 2.41783 5.83666 4.05246C4.20204 5.68709 3.28371 7.90411 3.28371 10.2158V15.8168C3.28382 16.5745 3.07069 17.3169 2.66871 17.9592L1.20455 20.3007C1.07724 20.5045 1.00677 20.7385 1.00046 20.9787C0.994159 21.2188 1.05225 21.4563 1.1687 21.6664C1.28515 21.8765 1.45572 22.0516 1.6627 22.1735C1.86967 22.2954 2.10552 22.3597 2.34574 22.3597H21.6543C21.8945 22.3597 22.1304 22.2954 22.3374 22.1735C22.5443 22.0516 22.7149 21.8765 22.8314 21.6664C22.9478 21.4563 23.0059 21.2188 22.9996 20.9787C22.9933 20.7385 22.9228 20.5045 22.7955 20.3007L21.3313 17.9592Z"
        stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.30957 27.397H14.6925" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function Left({ width, height, color }: { width: number, height: number, color: string }) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.42871 1.00049L1.13582 8.29338C0.745293 8.68391 0.745293 9.31707 1.13582 9.7076L8.42871 17.0005"
            stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function Right({ width, height, color }: { width: number, height: number, color: string }) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.57129 1.00049L8.86418 8.29338C9.25471 8.68391 9.25471 9.31707 8.86418 9.7076L1.57129 17.0005"
            stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function Dropdown({ width, height, color }: { width: number, height: number, color: string }) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L7.14645 7.14645C7.34171 7.34171 7.65829 7.34171 7.85355 7.14645L14 1" stroke={color}
            strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function Avatar({ width, height, color }: { width: number, height: number, color: string }) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
         fill={color}>
      <path
        d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"
        strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function Plus({ width, height, color, onClick }: {
  width: number,
  height: number,
  color?: string,
  onClick?: () => void
}) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
         stroke="#000000" fill={color} onClick={onClick}>
      <path d="M18 12H6M12 6v12" stroke={color}></path>
    </svg>
  )
}

export function Sort({ width, height, color, onClick }: {
  width: number,
  height: number,
  color: string,
  onClick?: () => void
}) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"
         onClick={onClick}>
      <path d="M1.68945 1.30176H16.1417" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M1.68945 7.87085H13.514" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M1.68945 14.4402H10.8863" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18.8262 5.2959V16.4272" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15.3877 13.5623L18.6161 16.7905C18.7323 16.9068 18.9204 16.9078 19.0379 16.7929L22.2637 13.6399"
            stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function Settings({ width, height, color, onClick }: {
  width: number,
  height: number,
  color: string,
  onClick?: () => void
}) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
         onClick={onClick}>
      <path
        d="M18.8867 11.5309L20.2427 12.7384C20.4931 12.9474 20.6604 13.2391 20.7144 13.5608C20.7683 13.8824 20.7053 14.2127 20.5367 14.4919L18.9017 17.2849C18.7749 17.4987 18.5937 17.6752 18.3767 17.7964C18.1572 17.9179 17.9106 17.9824 17.6597 17.9839C17.5041 17.9849 17.3492 17.9616 17.2007 17.9149L15.4652 17.3419C15.1612 17.5369 14.8452 17.7114 14.5172 17.8654L14.1527 19.6249C14.0853 19.9486 13.9051 20.2378 13.6442 20.4409C13.3801 20.6477 13.0526 20.7569 12.7172 20.7499H9.33171C8.99633 20.7569 8.66885 20.6477 8.40471 20.4409C8.14443 20.2376 7.96477 19.9484 7.89771 19.6249L7.53171 17.8654C7.20801 17.7094 6.89395 17.5341 6.59121 17.3404L4.84971 17.9149C4.70122 17.9616 4.54637 17.9849 4.39071 17.9839C4.1403 17.9822 3.89432 17.9177 3.67521 17.7964C3.45837 17.6756 3.27727 17.4997 3.15021 17.2864L1.45671 14.4919C1.28066 14.2102 1.21338 13.874 1.26751 13.5462C1.32163 13.2184 1.49343 12.9216 1.75071 12.7114L3.10521 10.9999V10.4689L1.74921 9.26145C1.49881 9.05249 1.3315 8.76078 1.27757 8.43913C1.22364 8.11748 1.28666 7.78715 1.45521 7.50795L3.14871 4.71495C3.27556 4.50115 3.45668 4.32468 3.67371 4.20345C3.89282 4.0822 4.1388 4.01774 4.38921 4.01595C4.54346 4.00621 4.69829 4.02038 4.84821 4.05795L6.55521 4.65795C6.86021 4.46295 7.17621 4.28845 7.50321 4.13445L7.86921 2.37495C7.93627 2.0515 8.11593 1.76234 8.37621 1.55895C8.64035 1.35216 8.96783 1.243 9.30321 1.24995H12.6602C12.9956 1.243 13.3231 1.35216 13.5872 1.55895C13.8497 1.76445 14.0297 2.05395 14.0942 2.37495L14.4602 4.13445C14.7852 4.28945 15.0987 4.46445 15.4007 4.65945L17.1437 4.08645C17.3372 4.02352 17.5416 4.00142 17.744 4.02156C17.9464 4.0417 18.1425 4.10363 18.3197 4.20345C18.5372 4.32645 18.7172 4.50345 18.8447 4.71345L20.5367 7.50795C20.7151 7.78728 20.7858 8.12199 20.7356 8.44962C20.6854 8.77725 20.5176 9.0754 20.2637 9.28845L18.8867 10.4614V11.5309Z"
        stroke={color} strokeWidth="1.5" />
      <path
        d="M14.75 11C14.75 11.9946 14.3549 12.9484 13.6517 13.6517C12.9484 14.3549 11.9946 14.75 11 14.75C10.0054 14.75 9.05161 14.3549 8.34835 13.6517C7.64509 12.9484 7.25 11.9946 7.25 11C7.25 10.0054 7.64509 9.05161 8.34835 8.34835C9.05161 7.64509 10.0054 7.25 11 7.25C11.9946 7.25 12.9484 7.64509 13.6517 8.34835C14.3549 9.05161 14.75 10.0054 14.75 11Z"
        stroke={color} strokeWidth="1.5" />
    </svg>

  )
}

export function Filter({ width, height, color, onClick }: {
  width: number,
  height: number,
  color: string,
  onClick?: () => void
}) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
         onClick={onClick}>
      <path
        d="M2 1H18C18.2652 1 18.5196 1.10536 18.7071 1.29289C18.8946 1.48043 19 1.73478 19 2V3.586C18.9999 3.85119 18.8946 4.10551 18.707 4.293L12.293 10.707C12.1055 10.8945 12.0001 11.1488 12 11.414V17.719C12 17.871 11.9653 18.021 11.8987 18.1576C11.832 18.2942 11.735 18.4138 11.6152 18.5073C11.4954 18.6008 11.3558 18.6658 11.2071 18.6973C11.0584 18.7288 10.9044 18.7259 10.757 18.689L8.757 18.189C8.54075 18.1348 8.34881 18.01 8.21166 17.8342C8.0745 17.6585 8.00001 17.4419 8 17.219V11.414C7.99994 11.1488 7.89455 10.8945 7.707 10.707L1.293 4.293C1.10545 4.10551 1.00006 3.85119 1 3.586V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1Z"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Trash({ width, height, onClick }: { width: number, height: number, onClick?: () => void }) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
         stroke="#000000" fill="none" onClick={onClick}>
      <path
        d="m6 8 .668 8.681c.148 1.924.222 2.885.84 3.423.068.06.14.115.217.165.685.449 1.63.26 3.522-.118.36-.072.54-.108.721-.111h.064c.182.003.361.039.72.11 1.892.379 2.838.568 3.523.12.076-.05.15-.106.218-.166.617-.538.691-1.5.84-3.423L18 8"></path>
      <path
        d="m10.151 12.5.245 3.492M13.849 12.5l-.245 3.492M4 8s4.851 1 8 1 8-1 8-1M8 5l.447-.894A2 2 0 0 1 10.237 3h3.527a2 2 0 0 1 1.789 1.106L16 5"></path>
    </svg>

  )
}

export function Home({ width, height, color }: { width: number, height: number, color: string }) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.27273 20.2308H16.7273M13.619 2.03782L21.119 6.84551C21.9795 7.39714 22.5 8.34898 22.5 9.37115V23C22.5 24.6569 21.1569 26 19.5 26H4.5C2.84315 26 1.5 24.6569 1.5 23V9.37115C1.5 8.34898 2.02045 7.39714 2.881 6.84551L10.381 2.03782C11.3677 1.40534 12.6323 1.40534 13.619 2.03782Z"
        stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Library({ width, height, color }: { width: number, height: number, color: string }) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 23.8656H20.3333C20.9777 23.8656 21.5 23.3432 21.5 22.6989C21.5 22.0546 20.9777 21.5322 20.3333 21.5322H4.014C3.475 21.5182 2.83333 21.3047 2.83333 20.3656C2.83333 19.4264 3.475 19.2129 4.014 19.1989H21.5V2.86556C21.5 1.57873 20.4535 0.532227 19.1667 0.532227H4C2.593 0.532227 0.5 1.46439 0.5 4.03223V20.3656C0.5 22.9334 2.593 23.8656 4 23.8656ZM2.83333 7.53223V4.03223C2.83333 3.09306 3.475 2.87956 4 2.86556H19.1667V16.8656H2.83333V7.53223Z"
        fill={color} stroke={color} strokeWidth="0.2" />
      <path
        d="M5.83398 6.36589C5.83398 5.72155 6.35632 5.19922 7.00065 5.19922H15.1673C15.8116 5.19922 16.334 5.72155 16.334 6.36589C16.334 7.01022 15.8117 7.53255 15.1673 7.53255H7.00065C6.35632 7.53255 5.83398 7.01022 5.83398 6.36589Z"
        fill={color} stroke={color} strokeWidth="0.1" />
    </svg>

  )
}

export function Memo({ width, height, color }: { width: number, height: number, color: string }) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.1129 0.398438H3.88699C3.02079 0.400853 2.19075 0.746022 1.57825 1.35852C0.965748 1.97102 0.620579 2.80106 0.618164 3.66727V22.1296C0.620579 22.9958 0.965748 23.8259 1.57825 24.4384C2.19075 25.0509 3.02079 25.396 3.88699 25.3984H18.1129C18.9799 25.3984 19.8113 25.054 20.4243 24.441C21.0374 23.828 21.3818 22.9966 21.3818 22.1296V3.66727C21.3818 2.80032 21.0374 1.96888 20.4243 1.35586C19.8113 0.742831 18.9799 0.398438 18.1129 0.398438ZM20.0742 22.1296C20.0742 22.6498 19.8676 23.1486 19.4998 23.5165C19.132 23.8843 18.6331 24.0909 18.1129 24.0909H3.88699C3.36682 24.0909 2.86796 23.8843 2.50015 23.5165C2.13233 23.1486 1.9257 22.6498 1.9257 22.1296V4.07264H20.0742V22.1296Z"
        fill={color} stroke={color} strokeWidth="0.1" />
      <path
        d="M5.71 9.68905C5.55252 9.68905 5.40149 9.62106 5.29013 9.50004C5.17877 9.37902 5.11621 9.21489 5.11621 9.04374C5.11621 8.8726 5.17877 8.70846 5.29013 8.58744C5.40149 8.46643 5.55252 8.39844 5.71 8.39844H16.2902C16.4477 8.39844 16.5987 8.46643 16.7101 8.58744C16.8214 8.70846 16.884 8.8726 16.884 9.04374C16.884 9.21489 16.8214 9.37902 16.7101 9.50004C16.5987 9.62106 16.4477 9.68905 16.2902 9.68905H5.71ZM5.71 15.0826C5.55252 15.0826 5.40149 15.0146 5.29013 14.8936C5.17877 14.7726 5.11621 14.6085 5.11621 14.4373C5.11621 14.2662 5.17877 14.102 5.29013 13.981C5.40149 13.86 5.55252 13.792 5.71 13.792H13.4293C13.5868 13.792 13.7378 13.86 13.8492 13.981C13.9605 14.102 14.0231 14.2662 14.0231 14.4373C14.0231 14.6085 13.9605 14.7726 13.8492 14.8936C13.7378 15.0146 13.5868 15.0826 13.4293 15.0826H5.71ZM5.73019 20.1662C5.57271 20.1662 5.42168 20.0982 5.31032 19.9772C5.19896 19.8562 5.1364 19.6921 5.1364 19.5209C5.1364 19.3498 5.19896 19.1856 5.31032 19.0646C5.42168 18.9436 5.57271 18.8756 5.73019 18.8756H9.59103C9.74852 18.8756 9.89955 18.9436 10.0109 19.0646C10.1223 19.1856 10.1848 19.3498 10.1848 19.5209C10.1848 19.6921 10.1223 19.8562 10.0109 19.9772C9.89955 20.0982 9.74852 20.1662 9.59103 20.1662H5.73019Z"
        fill={color} stroke={color} strokeWidth="0.3" />
    </svg>

  )
}

export function Group({ width, height, color }: { width: number, height: number, color: string }) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 2.77066C13.3969 2.77066 12.8185 3.01298 12.392 3.44432C11.9656 3.87565 11.726 4.46067 11.726 5.07066C11.726 5.68066 11.9656 6.26568 12.392 6.69701C12.8185 7.12834 13.3969 7.37066 14 7.37066C14.6031 7.37066 15.1815 7.12834 15.608 6.69701C16.0344 6.26568 16.274 5.68066 16.274 5.07066C16.274 4.46067 16.0344 3.87565 15.608 3.44432C15.1815 3.01298 14.6031 2.77066 14 2.77066ZM9.90678 5.07066C9.90678 3.97267 10.338 2.91964 11.1057 2.14324C11.8733 1.36684 12.9144 0.930664 14 0.930664C15.0856 0.930664 16.1267 1.36684 16.8943 2.14324C17.662 2.91964 18.0932 3.97267 18.0932 5.07066C18.0932 6.16866 17.662 7.22169 16.8943 7.99809C16.1267 8.77449 15.0856 9.21066 14 9.21066C12.9144 9.21066 11.8733 8.77449 11.1057 7.99809C10.338 7.22169 9.90678 6.16866 9.90678 5.07066ZM3.63842 5.53066C3.15593 5.53066 2.69321 5.72452 2.35204 6.06959C2.01087 6.41465 1.81921 6.88267 1.81921 7.37066C1.81921 7.85866 2.01087 8.32667 2.35204 8.67174C2.69321 9.01681 3.15593 9.21066 3.63842 9.21066C4.1209 9.21066 4.58363 9.01681 4.92479 8.67174C5.26596 8.32667 5.45763 7.85866 5.45763 7.37066C5.45763 6.88267 5.26596 6.41465 4.92479 6.06959C4.58363 5.72452 4.1209 5.53066 3.63842 5.53066ZM0 7.37066C0 6.39467 0.383332 5.45864 1.06567 4.76851C1.748 4.07838 2.67345 3.69066 3.63842 3.69066C4.60339 3.69066 5.52883 4.07838 6.21117 4.76851C6.8935 5.45864 7.27684 6.39467 7.27684 7.37066C7.27684 8.34666 6.8935 9.28268 6.21117 9.97282C5.52883 10.663 4.60339 11.0507 3.63842 11.0507C2.67345 11.0507 1.748 10.663 1.06567 9.97282C0.383332 9.28268 0 8.34666 0 7.37066ZM22.5424 7.37066C22.5424 6.88267 22.734 6.41465 23.0752 6.06959C23.4164 5.72452 23.8791 5.53066 24.3616 5.53066C24.8441 5.53066 25.3068 5.72452 25.648 6.06959C25.9891 6.41465 26.1808 6.88267 26.1808 7.37066C26.1808 7.85866 25.9891 8.32667 25.648 8.67174C25.3068 9.01681 24.8441 9.21066 24.3616 9.21066C23.8791 9.21066 23.4164 9.01681 23.0752 8.67174C22.734 8.32667 22.5424 7.85866 22.5424 7.37066ZM24.3616 3.69066C23.3966 3.69066 22.4712 4.07838 21.7888 4.76851C21.1065 5.45864 20.7232 6.39467 20.7232 7.37066C20.7232 8.34666 21.1065 9.28268 21.7888 9.97282C22.4712 10.663 23.3966 11.0507 24.3616 11.0507C25.3265 11.0507 26.252 10.663 26.9343 9.97282C27.6167 9.28268 28 8.34666 28 7.37066C28 6.39467 27.6167 5.45864 26.9343 4.76851C26.252 4.07838 25.3265 3.69066 24.3616 3.69066ZM5.91243 13.3507C5.91243 13.1458 5.9285 12.9462 5.96064 12.7517L1.6855 13.91C1.10304 14.0681 0.606502 14.4536 0.305087 14.9819C0.00367199 15.5102 -0.0779312 16.1379 0.0782259 16.7271L0.902328 19.8367C1.10125 20.588 1.45491 21.2883 1.94013 21.8917C2.42535 22.4952 3.03117 22.9881 3.71789 23.3381C4.40461 23.6882 5.15672 23.8875 5.92492 23.923C6.69313 23.9586 7.46009 23.8295 8.17552 23.5443C7.68382 23.0978 7.25884 22.5815 6.9139 22.0115C6.00427 22.2026 5.05684 22.0345 4.26583 21.5417C3.47483 21.0488 2.90017 20.2687 2.65968 19.361L1.83558 16.2514C1.82003 16.1931 1.816 16.1322 1.82372 16.0723C1.83144 16.0123 1.85077 15.9545 1.88059 15.9021C1.9104 15.8498 1.95014 15.8039 1.99751 15.767C2.04488 15.7302 2.09897 15.7031 2.15667 15.6875L5.91243 14.6699V13.3507ZM20.4112 23.7402C20.2118 23.6865 20.0156 23.6214 19.8236 23.5452C20.3156 23.0988 20.7409 22.5825 21.0861 22.0125C21.9956 22.203 22.9427 22.0345 23.7333 21.5415C24.5239 21.0485 25.0982 20.2684 25.3385 19.361L26.1617 16.2505C26.1928 16.1328 26.1765 16.0074 26.1163 15.9018C26.0561 15.7962 25.9569 15.7192 25.8406 15.6875L22.0876 14.6699V13.3507C22.0876 13.147 22.0715 12.9477 22.0394 12.7527L26.3118 13.91C26.8942 14.0681 27.3908 14.4536 27.6922 14.9819C27.9936 15.5102 28.0752 16.1379 27.919 16.7271L27.0949 19.8367C26.7204 21.2507 25.8058 22.4564 24.5523 23.1885C23.2989 23.9205 21.8093 24.119 20.4112 23.7402ZM10.8164 11.0507C10.2133 11.0507 9.63487 11.293 9.20842 11.7243C8.78195 12.1557 8.54237 12.7407 8.54237 13.3507V18.4107C8.54237 19.8747 9.11737 21.2787 10.1409 22.3139C11.1644 23.3491 12.5525 23.9307 14 23.9307C15.4475 23.9307 16.8356 23.3491 17.8591 22.3139C18.8826 21.2787 19.4576 19.8747 19.4576 18.4107V13.3507C19.4576 12.7407 19.218 12.1557 18.7916 11.7243C18.3651 11.293 17.7867 11.0507 17.1836 11.0507H10.8164ZM10.3616 13.3507C10.3616 13.2287 10.4095 13.1117 10.4948 13.0254C10.5801 12.9391 10.6958 12.8907 10.8164 12.8907H17.1836C17.3042 12.8907 17.4199 12.9391 17.5052 13.0254C17.5905 13.1117 17.6384 13.2287 17.6384 13.3507V18.4107C17.6384 19.3867 17.2551 20.3227 16.5727 21.0128C15.8904 21.7029 14.965 22.0907 14 22.0907C13.035 22.0907 12.1096 21.7029 11.4272 21.0128C10.7449 20.3227 10.3616 19.3867 10.3616 18.4107V13.3507Z"
        fill={color} />
    </svg>
  )
}

export function Back({ width, height, color }: { width: number, height: number, color: string }) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5.59961L14.8 5.59961" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M5.6 1L1.21213 5.38787C1.09497 5.50503 1.09497 5.69498 1.21213 5.81213L5.6 10.2" stroke={color}
            strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function More({ width, height, color, onClick }: {
  width: number,
  height: number,
  color: string,
  onClick?: () => void
}) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 5 23" fill="none" xmlns="http://www.w3.org/2000/svg"
         onClick={onClick}>
      <circle cx="2.61178" cy="2.34225" r="2.01901" fill={color} />
      <circle cx="2.61178" cy="11.4277" r="2.01901" fill={color} />
      <circle cx="2.61178" cy="20.5132" r="2.01901" fill={color} />
    </svg>
  )
}

export function Logout({ width, height, color, onClick }: {
  width: number,
  height: number,
  color: string,
  onClick?: () => void
}) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg"
         onClick={onClick}>
      <path
        d="M10.5957 21.5H3.13333C1.95467 21.5 1 20.2211 1 18.6433V4.35556C1 2.77889 1.95467 1.5 3.13333 1.5H10.6M14.2667 15.3889L18 11.5L14.2667 7.61111M7.33333 11.4956H18"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CheckedRadioButton({ width, height }: {
  width: number,
  height: number,
}) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16.5" cy="16.5" r="16.5" fill="#EF5C7C" />
      <path
        d="M13.8751 20.1486L10.8389 17.1124C10.6753 16.9487 10.4534 16.8568 10.222 16.8568C9.99063 16.8568 9.76873 16.9487 9.60513 17.1124C9.44152 17.276 9.34961 17.4979 9.34961 17.7292C9.34961 17.8438 9.37217 17.9572 9.41602 18.0631C9.45986 18.1689 9.52412 18.2651 9.60513 18.3461L13.2626 22.0036C13.6039 22.3449 14.1551 22.3449 14.4964 22.0036L23.7539 12.7461C23.9175 12.5825 24.0094 12.3606 24.0094 12.1292C24.0094 11.8979 23.9175 11.676 23.7539 11.5124C23.5903 11.3487 23.3684 11.2568 23.137 11.2568C22.9056 11.2568 22.6837 11.3487 22.5201 11.5124L13.8751 20.1486Z"
        fill="white" stroke="white" strokeWidth="0.5" />
    </svg>
  )
}

export function UncheckedRadioButton({ width, height }: {
  width: number,
  height: number,
}) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="8.5" stroke="#EF5C7C" />
    </svg>
  )
}

export function Visibility({ width, height }: {
  width: number,
  height: number,
}) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.74531 10.869C1.6474 10.6052 1.6474 10.3151 1.74531 10.0513C2.69889 7.73916 4.31754 5.76219 6.39606 4.37107C8.47457 2.97994 10.9193 2.2373 13.4204 2.2373C15.9215 2.2373 18.3663 2.97994 20.4448 4.37107C22.5233 5.76219 24.142 7.73916 25.0956 10.0513C25.1935 10.3151 25.1935 10.6052 25.0956 10.869C24.142 13.1812 22.5233 15.1581 20.4448 16.5493C18.3663 17.9404 15.9215 18.683 13.4204 18.683C10.9193 18.683 8.47457 17.9404 6.39606 16.5493C4.31754 15.1581 2.69889 13.1812 1.74531 10.869Z"
        stroke="#8F8F8F" strokeWidth="1.60761" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M13.4209 13.9834C15.3673 13.9834 16.9453 12.4054 16.9453 10.459C16.9453 8.51249 15.3673 6.93457 13.4209 6.93457C11.4744 6.93457 9.89648 8.51249 9.89648 10.459C9.89648 12.4054 11.4744 13.9834 13.4209 13.9834Z"
        stroke="#8F8F8F" strokeWidth="1.60761" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function VisibilityOff({ width, height }: {
  width: number,
  height: number,
}) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.74531 10.869C1.6474 10.6052 1.6474 10.3151 1.74531 10.0513C2.69889 7.73916 4.31754 5.76219 6.39606 4.37107C8.47457 2.97994 10.9193 2.2373 13.4204 2.2373C15.9215 2.2373 18.3663 2.97994 20.4448 4.37107C22.5233 5.76219 24.142 7.73916 25.0956 10.0513C25.1935 10.3151 25.1935 10.6052 25.0956 10.869C24.142 13.1812 22.5233 15.1581 20.4448 16.5493C18.3663 17.9404 15.9215 18.683 13.4204 18.683C10.9193 18.683 8.47457 17.9404 6.39606 16.5493C4.31754 15.1581 2.69889 13.1812 1.74531 10.869Z"
        stroke="#8F8F8F" strokeWidth="1.60761" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M13.4209 13.9834C15.3673 13.9834 16.9453 12.4054 16.9453 10.459C16.9453 8.51249 15.3673 6.93457 13.4209 6.93457C11.4744 6.93457 9.89648 8.51249 9.89648 10.459C9.89648 12.4054 11.4744 13.9834 13.4209 13.9834Z"
        stroke="#8F8F8F" strokeWidth="1.60761" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23.9312 2.23633L5.38184 20.7857" stroke="white" strokeWidth="1.85494" />
      <path d="M22.6949 1L4.14551 19.5494" stroke="#8F8F8F" strokeWidth="1.85494" strokeLinecap="round" />
    </svg>
  )
}

export function Calendar({ width, height }: {
  width: number,
  height: number,
}) {
  return (
    <svg width={`${width}vw`} height={`${height}vw`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 12C2 8.229 2 6.343 3.172 5.172C4.344 4.001 6.229 4 10 4H14C17.771 4 19.657 4 20.828 5.172C21.999 6.344 22 8.229 22 12V14C22 17.771 22 19.657 20.828 20.828C19.656 21.999 17.771 22 14 22H10C6.229 22 4.343 22 3.172 20.828C2.001 19.656 2 17.771 2 14V12Z"
        stroke="#262932" strokeWidth="1.5" />
      <path d="M7 4V2.5M17 4V2.5M2.5 9H21.5" stroke="#262932" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C16.7348 18 16.4804 17.8946 16.2929 17.7071C16.1054 17.5196 16 17.2652 16 17C16 16.7348 16.1054 16.4804 16.2929 16.2929C16.4804 16.1054 16.7348 16 17 16C17.2652 16 17.5196 16.1054 17.7071 16.2929C17.8946 16.4804 18 16.7348 18 17ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14C16.7348 14 16.4804 13.8946 16.2929 13.7071C16.1054 13.5196 16 13.2652 16 13C16 12.7348 16.1054 12.4804 16.2929 12.2929C16.4804 12.1054 16.7348 12 17 12C17.2652 12 17.5196 12.1054 17.7071 12.2929C17.8946 12.4804 18 12.7348 18 13ZM13 17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17ZM13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13ZM8 17C8 17.2652 7.89464 17.5196 7.70711 17.7071C7.51957 17.8946 7.26522 18 7 18C6.73478 18 6.48043 17.8946 6.29289 17.7071C6.10536 17.5196 6 17.2652 6 17C6 16.7348 6.10536 16.4804 6.29289 16.2929C6.48043 16.1054 6.73478 16 7 16C7.26522 16 7.51957 16.1054 7.70711 16.2929C7.89464 16.4804 8 16.7348 8 17ZM8 13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13C6 12.7348 6.10536 12.4804 6.29289 12.2929C6.48043 12.1054 6.73478 12 7 12C7.26522 12 7.51957 12.1054 7.70711 12.2929C7.89464 12.4804 8 12.7348 8 13Z"
        fill="#262932" />
    </svg>
  )
}
