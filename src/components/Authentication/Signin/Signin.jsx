import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {signinUser}  from '../../../redux/actions/userAction'
import style from './style.module.css'

const Signin = () => {


  return (
    <div className={style.cont}>
      <Link to='/signin'>
        <div>
          <button type="button" className={style.enter}>
              <span className={style.btnIcon}>
              <svg width="36" height="43" viewBox="0 0 36 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4057 0.115332C14.3361 0.444215 12.549 1.37459 11.0544 2.90109C10.254 3.7186 9.86605 4.26895 9.34568 5.32497C8.35979 7.32581 8.27564 8.04816 8.32326 14.1013C8.35316 17.9098 8.37986 18.6849 8.49828 19.1883C8.67171 19.9257 9.0614 21.003 9.39087 21.6556L9.64081 22.1506L5.12874 25.3138C2.64709 27.0536 0.514643 28.5857 0.389842 28.7185C0.265125 28.8513 0.122184 29.1115 0.0722973 29.2968C0.0102328 29.5275 -0.0109312 31.6027 0.00519379 35.8867C0.0284575 42.0528 0.0312288 42.1431 0.201969 42.3718C0.297207 42.4993 0.479453 42.6816 0.607026 42.7768L0.83899 42.95H17.8755H34.912L35.1439 42.7768C35.2715 42.6816 35.4537 42.4993 35.549 42.3718C35.7197 42.1431 35.7225 42.0528 35.7458 35.8867C35.7619 31.6027 35.7407 29.5275 35.6786 29.2968C35.6288 29.1115 35.4858 28.8513 35.3611 28.7185C35.2363 28.5857 33.1039 27.0536 30.6222 25.3138L26.1101 22.1506L26.3601 21.6556C26.6895 21.003 27.0792 19.9257 27.2527 19.1883C27.3711 18.6849 27.3978 17.9098 27.4277 14.1013C27.4661 9.22629 27.414 8.20639 27.0633 6.96602C26.8214 6.11047 26.0854 4.58255 25.6054 3.93922C23.4368 1.03311 19.8949 -0.439133 16.4057 0.115332ZM19.2614 2.66972C21.5086 3.13356 23.2744 4.53829 24.2518 6.63983C24.8818 7.99449 24.8883 8.06504 24.8872 13.5554L24.8862 18.4265L24.6554 19.1653C24.385 20.0311 24.0594 20.7023 23.5453 21.4532C23.0606 22.1611 23.0046 22.4632 23.2622 22.9796C23.4481 23.352 23.7653 23.5906 28.3525 26.8096L33.2446 30.2425V35.3574V40.4724H27.2492H21.2537L21.7902 37.8553C22.0853 36.4159 22.3266 35.2065 22.3266 35.1678C22.3266 35.1291 22.7329 35.0973 23.2295 35.0971C24.2479 35.0968 24.5422 34.9862 24.8484 34.4893C25.01 34.227 25.0161 34.0937 24.9946 31.291L24.9722 28.3664L24.6185 28.0366L24.2648 27.7068H23.3377C22.8278 27.7068 22.4108 27.6785 22.4109 27.6438C22.411 27.6091 22.5197 27.3144 22.6524 26.9889C23.8032 24.1652 22.3796 21.0482 19.4817 20.0466C18.677 19.7684 17.0739 19.7684 16.2693 20.0466C13.3714 21.0482 11.9478 24.1652 13.0985 26.9889C13.2312 27.3144 13.3399 27.6091 13.3401 27.6438C13.3401 27.6785 12.9232 27.7068 12.4132 27.7068H11.4862L11.1325 28.0366L10.7788 28.3664L10.7564 31.291C10.7349 34.0937 10.7409 34.227 10.9026 34.4893C11.2087 34.9862 11.5031 35.0968 12.5215 35.0971C13.018 35.0973 13.4243 35.1291 13.4243 35.1678C13.4243 35.2065 13.6657 36.4159 13.9607 37.8553L14.4972 40.4724H8.50172H2.50633V35.3574V30.2425L7.39842 26.8096C11.9856 23.5906 12.3029 23.352 12.4887 22.9796C12.7464 22.4632 12.6904 22.1611 12.2057 21.4532C11.6915 20.7023 11.3659 20.0311 11.0955 19.1653L10.8648 18.4265L10.8638 13.5554C10.8629 9.1135 10.8765 8.62513 11.018 8.01247C11.8792 4.28524 15.5528 1.90428 19.2614 2.66972ZM18.8031 22.4935C19.4427 22.7365 19.9269 23.1774 20.2188 23.7827C20.5347 24.4375 20.6121 24.9656 20.4768 25.5413C20.3424 26.113 20.2051 26.3777 19.8233 26.8011C18.833 27.8995 16.918 27.8995 15.9276 26.8011C15.5458 26.3777 15.4085 26.113 15.2741 25.5413C14.9895 24.3305 15.731 22.9643 16.9261 22.4973C17.4626 22.2877 18.2572 22.286 18.8031 22.4935ZM22.4946 31.4021V32.5779H17.8755H13.2563V31.4021V30.2263H17.8755H22.4946V31.4021ZM19.7231 35.2364C19.7231 35.3128 19.4897 36.5222 19.2043 37.9239L18.6854 40.4724H17.8755H17.0655L16.5467 37.9239C16.2613 36.5222 16.0278 35.3128 16.0278 35.2364C16.0278 35.1113 16.2122 35.0974 17.8755 35.0974C19.5387 35.0974 19.7231 35.1113 19.7231 35.2364Z" fill="#555555"/>
              </svg>

              </span>
              <span className={style.btnText}>Политика</span>
          </button>
        </div>
    </Link>
    <Link to='/signin'>
        <div>
          <button type="button" className={style.enter}>
              <span className={style.btnIcon}>
              <svg width="43" height="36" viewBox="0 0 43 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2959 0.108938C5.62393 1.0006 1.50172 6.04243 1.78845 11.7375C1.86051 13.1702 2.20602 14.6098 2.80298 15.9648L2.94172 16.2797H1.97145C1.1647 16.2797 0.945244 16.3082 0.669691 16.4488C0.297053 16.6389 0 17.1227 0 17.5395C0 17.9562 0.297053 18.44 0.669691 18.6302C0.971783 18.7843 1.16276 18.7992 2.83011 18.7992H4.65912L12.7646 26.898C21.5777 35.7037 21.017 35.1984 21.8149 35.0538C22.0949 35.0031 23.031 34.0965 30.2354 26.898L38.3409 18.7992H40.1699C41.8372 18.7992 42.0282 18.7843 42.3303 18.6302C42.7029 18.44 43 17.9562 43 17.5395C43 17.1227 42.7029 16.6389 42.3303 16.4488C42.0548 16.3082 41.8353 16.2797 41.0285 16.2797H40.0583L40.197 15.9648C42.2128 11.389 41.2021 6.31656 37.6081 2.97155C35.9409 1.41993 33.933 0.457137 31.6201 0.100372C30.5917 -0.0581908 28.7419 -0.0134273 27.7568 0.194014C25.663 0.634848 23.8186 1.59924 22.256 3.07006L21.5 3.78183L20.7264 3.0536C19.0126 1.44034 17.0038 0.459237 14.6973 0.108938C13.7409 -0.0363547 12.2201 -0.0362707 11.2959 0.108938ZM14.6733 2.66626C16.002 2.92502 17.1431 3.42095 18.2092 4.20318C18.4718 4.39584 19.1589 5.01379 19.7363 5.5764C20.3137 6.13902 20.8687 6.64217 20.9696 6.6944C21.2062 6.81702 21.795 6.81669 22.0304 6.69373C22.1313 6.64107 22.7052 6.12138 23.3057 5.53895C24.9655 3.92905 26.0555 3.25625 27.7751 2.78023C28.5089 2.57707 28.7402 2.55263 29.9404 2.55146C31.0574 2.55028 31.409 2.58177 32.0238 2.73773C34.1995 3.28959 36.0253 4.5717 37.2441 6.40357C39.1642 9.28919 39.1938 12.993 37.3206 15.9603L37.119 16.2797H33.8135H30.5078L29.0174 13.9248C27.7329 11.8951 27.4825 11.5472 27.2044 11.4053C26.784 11.1908 26.4065 11.1989 26.0029 11.431C25.7111 11.5988 25.4564 12.0031 23.5838 15.2719C22.4327 17.2812 21.4646 18.9513 21.4325 18.9832C21.4003 19.0151 20.1458 16.6158 18.6445 13.6515C16.0253 8.47949 15.9014 8.25416 15.5791 8.07292C14.9755 7.73354 14.2387 7.90252 13.9144 8.45455C13.8304 8.59783 13.0509 10.4076 12.1824 12.4763L10.6031 16.2377L8.24769 16.26L5.89218 16.2823L5.72807 16.05C5.63779 15.9223 5.41254 15.5154 5.22744 15.1459C3.14773 10.9926 4.64854 6.00548 8.69104 3.63637C10.3615 2.65744 12.6892 2.27993 14.6733 2.66626ZM19.8104 21.527C20.2926 22.4725 20.4107 22.6421 20.7021 22.8063C21.1279 23.0463 21.537 23.0469 21.9521 22.8082C22.2443 22.6401 22.5039 22.2267 24.4422 18.844C25.6325 16.767 26.6383 15.0585 26.6776 15.0474C26.7169 15.0363 27.2349 15.8017 27.8287 16.7481C28.7432 18.2058 28.9579 18.4942 29.2321 18.6341C29.5332 18.7877 29.7363 18.7992 32.1416 18.7992H34.7274L28.1137 25.4129L21.5 32.0266L14.8863 25.4129L8.27263 18.7992H9.97659C11.5185 18.7992 11.712 18.7832 12.0119 18.6302C12.4211 18.4214 12.4011 18.4603 13.7605 15.222C14.3617 13.7897 14.9006 12.5148 14.958 12.3887C15.0581 12.1691 15.1496 12.3317 17.1585 16.2983C18.3114 18.5745 19.5047 20.9274 19.8104 21.527Z" fill="#555555"/>
</svg>


              </span>
              <span className={style.btnText}>Здоровье</span>
          </button>
        </div>
    </Link>
    <Link to='/signin'>
        <div>
          <button type="button" className={style.enter}>
              <span className={style.btnIcon}>
              <svg width="43" height="37" viewBox="0 0 43 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.5404 0.0838421C23.875 0.343602 20.1195 1.25873 18.4853 2.29037C17.8437 2.69539 17.7959 2.84887 17.7956 4.50539L17.7952 5.95297L17.5642 6.00573C14.8098 6.63438 12.3146 7.52799 9.52022 8.88669C5.98692 10.6046 3.64186 12.1938 1.58125 14.2668C0.282873 15.5729 -0.0611491 16.0953 0.00849545 16.6551C0.0598257 17.0681 5.32097 28.312 5.9697 29.395C7.49112 31.9354 9.65808 33.9361 12.2926 35.2332C13.8487 35.9992 15.5074 36.4814 17.3752 36.7106C18.9592 36.905 21.9146 36.6497 22.9136 36.2324C23.3523 36.0491 24.0464 35.5035 24.9242 34.6521C26.1417 33.4713 27.1237 32.1481 27.8781 30.6717C28.0737 30.2892 28.2762 29.9932 28.3281 30.014C28.38 30.0349 28.8551 30.1569 29.3838 30.2852L30.3449 30.5184L31.0468 30.3739C32.1096 30.1552 33.4415 29.6949 34.4822 29.1869C38.7968 27.0805 41.8092 23.1175 42.7611 18.2953C42.9461 17.3574 42.9502 17.2065 42.9749 10.2407L43 3.14182L42.8101 2.81166C42.2789 1.88805 38.8709 0.742567 35.3114 0.291348C33.0355 0.0028563 29.8748 -0.0814901 27.5404 0.0838421ZM32.5681 2.59861C35.6199 2.77536 38.3166 3.29396 40.079 4.04299L40.478 4.21261V10.0684C40.478 16.4336 40.4401 17.1939 40.047 18.7233C38.9794 22.8763 35.9594 26.1152 31.8376 27.5276C31.1235 27.7723 30.8241 27.8329 30.3548 27.8273C29.7244 27.8198 29.0794 27.6299 29.1186 27.4632C29.5484 25.6315 29.6355 22.9768 29.3223 21.2475C29.2263 20.717 29.1591 20.2715 29.173 20.2576C29.1869 20.2436 29.4396 20.1928 29.7346 20.1447C31.0122 19.9361 32.428 20.3541 33.4339 21.2369C34.1399 21.8564 34.5327 21.9551 35.1594 21.6705C35.625 21.4592 35.8945 20.961 35.8339 20.4236C35.782 19.9627 35.6133 19.7295 34.9259 19.1678C33.3509 17.8811 31.1668 17.3147 29.1433 17.6683C28.708 17.7443 28.3261 17.7771 28.2947 17.741C28.1954 17.6274 26.0955 13.0857 26.1275 13.0538C26.1443 13.037 26.4266 12.9672 26.7548 12.8988C27.4878 12.746 28.11 12.4389 28.5979 11.9892C29.2219 11.414 29.2955 10.6911 28.7887 10.1141C28.3021 9.55978 27.614 9.54861 26.9382 10.0839C26.6479 10.3139 26.5021 10.366 26.0744 10.3932C25.5939 10.4238 25.5346 10.4069 25.1817 10.1374C24.9737 9.97874 24.734 9.80988 24.6488 9.76225C24.5636 9.71453 24.1249 8.88593 23.6738 7.92091C22.6211 5.66859 22.6282 5.6754 21.2744 5.63239L20.3155 5.60197V4.89805V4.19421L20.6163 4.06853C23.4257 2.89466 27.9895 2.33339 32.5681 2.59861ZM23.2202 12.929C25.9726 18.7886 26.2185 19.3411 26.4834 20.2601C27.1451 22.556 27.1494 25.0541 26.4957 27.3101C25.8056 29.6914 24.3568 31.8895 22.4087 33.5107C21.9704 33.8755 21.8575 33.9249 21.1425 34.0635C19.9646 34.292 17.8813 34.2768 16.6419 34.0306C13.8098 33.468 11.4656 32.1304 9.51359 29.9631C8.90048 29.2823 8.20345 28.267 7.797 27.4628C7.38653 26.6504 2.7574 16.7753 2.7574 16.7119C2.7574 16.5952 4.51498 14.9483 5.15186 14.4681C8.15959 12.2006 12.3614 10.108 16.1603 8.98582C17.8623 8.48302 19.74 8.14068 20.6321 8.17042L20.9906 8.18243L23.2202 12.929ZM33.0864 9.7378C32.7117 9.82702 32.2721 10.3046 32.1972 10.7041C32.1066 11.1873 32.2796 11.611 32.7297 12.008C33.7891 12.9423 35.235 13.2209 36.5956 12.7528C37.2109 12.541 38.0689 11.9163 38.2403 11.555C38.5207 10.9641 38.3392 10.2142 37.8438 9.91674C37.2676 9.57087 36.7891 9.62355 36.1626 10.1019C35.8175 10.3653 35.6979 10.4087 35.3181 10.4087C34.9443 10.4087 34.7986 10.3578 34.3794 10.0804C33.828 9.71562 33.5213 9.6343 33.0864 9.7378ZM19.7275 15.1127C18.4455 15.3521 17.4376 16.0914 16.8759 17.2041C16.5573 17.8352 16.5362 18.3247 16.8098 18.7343C17.3567 19.5531 18.6029 19.4659 19.0135 18.5804C19.3811 17.7872 19.7455 17.6004 20.774 17.6774C21.6466 17.7429 21.9332 17.6553 22.2356 17.2307C22.776 16.4717 22.4003 15.5069 21.4618 15.2436C20.8772 15.0796 20.1847 15.0273 19.7275 15.1127ZM11.0955 19.1001C9.97623 19.3541 9.00012 20.1159 8.5016 21.1247C8.24696 21.6399 8.20261 21.8068 8.23764 22.1174C8.31888 22.8385 8.90653 23.3202 9.60843 23.241C10.0787 23.188 10.4264 22.9305 10.6394 22.4772C10.9581 21.7993 11.5957 21.4418 12.2254 21.588C13.0623 21.7823 13.6289 21.5868 13.9432 20.9953C14.3212 20.284 13.9495 19.4908 13.0972 19.19C12.5592 19.0003 11.7045 18.9618 11.0955 19.1001ZM21.4597 22.5904C21.0757 22.7097 20.8297 23.0004 20.465 23.7663C19.5285 25.7332 17.1544 26.8839 15.1882 26.3239C14.3482 26.0846 13.9257 26.0783 13.6025 26.3002C13.1349 26.621 12.9638 26.9156 12.9709 27.3872C12.9867 28.4516 14.0251 28.9353 16.2831 28.9302C17.7388 28.9268 18.2178 28.8179 19.4334 28.2136C20.9497 27.4599 21.9217 26.4933 22.6808 24.9845C23.057 24.2369 23.0996 24.0975 23.069 23.7185C23.0166 23.0704 22.6349 22.6586 21.9957 22.5605C21.834 22.5357 21.5928 22.5492 21.4597 22.5904Z" fill="#555555"/>
</svg>


              </span>
              <span className={style.btnText}>Культура</span>
          </button>
        </div>
    </Link>
    <Link to='/signin'>
        <div>
          <button type="button" className={style.enter}>
              <span className={style.btnIcon}>
              <svg width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.1055 0.120162C30.7742 0.622709 29.0167 2.92682 29.1838 5.26159C29.2077 5.59659 29.2141 5.87076 29.1978 5.87076C29.1816 5.87076 28.1043 5.13354 26.8039 4.23246C25.5034 3.33139 24.2813 2.50275 24.0881 2.39108C22.9442 1.73006 21.3105 1.77426 20.1869 2.49678C19.9673 2.63794 18.3484 4.20163 16.5893 5.97159C13.6841 8.89462 13.3696 9.23828 13.1587 9.71923C12.6698 10.8336 12.6779 11.8991 13.1834 12.9794C13.8545 14.4133 15.5462 15.3051 17.1054 15.0467C18.2545 14.8563 18.5733 14.6313 20.724 12.4931L22.6761 10.5522L23.6015 11.2154L24.5268 11.8785L13.2855 23.1377C2.66037 33.7797 2.03153 34.4259 1.81366 34.9264C1.15214 36.446 1.43521 38.0697 2.55727 39.1917C3.67958 40.3141 5.30469 40.5972 6.82258 39.9349C7.31748 39.7189 7.77608 39.2808 13.8436 33.2283L20.3352 26.7529L21.4461 27.8639L22.5571 28.9748L19.8963 31.644C17.5077 34.0402 17.2087 34.3706 16.9734 34.8737C16.2663 36.3847 16.5394 38.0495 17.6816 39.1917C18.8232 40.3334 20.485 40.6065 21.9998 39.9013C22.5173 39.6604 22.8849 39.3158 26.7786 35.4222C30.6723 31.5285 31.0169 31.1609 31.2578 30.6434C31.7825 29.516 31.7821 28.4348 31.2564 27.3115C31.0211 26.8085 30.722 26.4781 28.3336 24.082L25.673 21.4129L26.2701 20.8159L26.8672 20.2189L27.145 20.7401C27.6221 21.6353 28.6113 22.3644 29.6436 22.5818C30.2267 22.7046 39.2781 22.7116 39.9206 22.5898C41.4819 22.2937 42.6891 21.0428 42.9536 19.4472C43.2748 17.5083 41.8933 15.5733 39.9206 15.1992C39.6718 15.152 38.2852 15.1134 36.8391 15.1134H34.2098L34.1728 12.8238C34.1525 11.5644 34.1075 10.4301 34.073 10.303C34.0123 10.0801 34.0216 10.0719 34.335 10.0705C34.909 10.0679 35.819 9.83048 36.4664 9.51438C37.3241 9.09552 38.2539 8.16344 38.6823 7.29287C39.6687 5.28839 39.3053 3.06478 37.7344 1.49387C36.4832 0.242753 34.8228 -0.250048 33.1055 0.120162ZM35.2237 2.74247C35.7146 2.95959 36.2645 3.50818 36.4941 4.00972C36.7426 4.55234 36.7426 5.50871 36.4941 6.05133C36.2655 6.55069 35.7179 7.09827 35.2186 7.3269C34.6759 7.57536 33.7196 7.57536 33.177 7.3269C32.0976 6.83276 31.4851 5.59273 31.7582 4.45437C32.1218 2.93875 33.7968 2.11128 35.2237 2.74247ZM22.6484 4.49084C22.867 4.54957 28.091 8.16554 28.1095 8.27091C28.117 8.3141 27.7197 8.73783 27.2265 9.21257L26.3298 10.0756L24.7565 8.94478C23.8912 8.32275 23.0549 7.77156 22.8981 7.7198C22.235 7.501 22.1656 7.55049 19.6616 10.031C18.3908 11.2899 17.23 12.3813 17.0821 12.4563C16.5149 12.7439 15.7996 12.5061 15.4703 11.9202C15.2239 11.4817 15.2433 11.1046 15.5354 10.6556C15.8409 10.1858 21.295 4.7477 21.6362 4.57268C21.8911 4.44194 22.3332 4.40614 22.6484 4.49084ZM3.34088 5.20378C2.98613 5.39107 2.68877 5.88681 2.68877 6.29088C2.68877 6.70781 2.98596 7.19187 3.35878 7.3821C3.67496 7.54343 3.84855 7.55124 7.10003 7.55124C10.3515 7.55124 10.5251 7.54343 10.8413 7.3821C11.2141 7.19187 11.5113 6.70781 11.5113 6.29088C11.5113 5.87396 11.2141 5.3899 10.8413 5.19967C10.5246 5.03817 10.3555 5.03069 7.08238 5.03422C3.83612 5.03775 3.63841 5.04674 3.34088 5.20378ZM0.65211 10.2452C0.297361 10.4325 0 10.9283 0 11.3323C0 11.7493 0.297193 12.2333 0.670007 12.4235C0.98661 12.585 1.15962 12.5927 4.49528 12.5927C7.83095 12.5927 8.00396 12.585 8.32056 12.4235C8.69337 12.2333 8.99057 11.7493 8.99057 11.3323C8.99057 10.9154 8.69337 10.4313 8.32056 10.2411C8.00354 10.0794 7.83499 10.0721 4.47764 10.0757C1.14777 10.0792 0.950059 10.0879 0.65211 10.2452ZM31.0764 10.3021C31.1931 10.3892 31.3665 10.5648 31.4618 10.6923C31.6269 10.9133 31.637 11.061 31.677 13.838C31.7244 17.1181 31.7303 17.1503 32.3476 17.4652C32.6631 17.6262 32.8389 17.6341 36.0883 17.6341C39.3398 17.6341 39.5134 17.6419 39.8296 17.8033C40.2024 17.9935 40.4996 18.4776 40.4996 18.8945C40.4996 19.3114 40.2024 19.7955 39.8296 19.9857C39.509 20.1492 39.3426 20.1548 34.8279 20.1548C30.3133 20.1548 30.1469 20.1492 29.8263 19.9857C29.2896 19.7119 29.1563 19.3494 29.1562 18.1626C29.1561 17.0309 29.0521 16.714 28.5767 16.3965C28.2441 16.1742 27.6733 16.1417 27.3246 16.325C27.1998 16.3907 26.11 17.4399 24.9027 18.6567C23.0362 20.5379 22.7015 20.9127 22.6669 21.1605C22.5743 21.823 22.6146 21.8733 25.8356 25.1123C27.513 26.799 28.9464 28.3001 29.0209 28.448C29.2235 28.8503 29.1899 29.2289 28.9137 29.6541C28.5964 30.1426 21.2131 37.4895 20.8632 37.665C20.2939 37.9505 19.5802 37.7123 19.2514 37.1274C19.0388 36.7491 19.0246 36.3761 19.2089 36.0102C19.2833 35.8623 20.7168 34.3612 22.3942 32.6744C25.6149 29.4357 25.6551 29.3855 25.5631 28.7227C25.5283 28.4717 25.0936 27.9993 22.4339 25.3223C20.735 23.6124 19.2839 22.0924 19.2092 21.9446C19.0062 21.5425 19.0398 21.1638 19.3162 20.7385C19.6755 20.1856 29.557 10.3587 29.9125 10.2005C30.2725 10.0405 30.7861 10.0853 31.0764 10.3021ZM3.34088 15.2867C2.98613 15.474 2.68877 15.9697 2.68877 16.3738C2.68877 16.7907 2.98596 17.2748 3.35878 17.465C3.67496 17.6263 3.84855 17.6341 7.10003 17.6341C10.3515 17.6341 10.5251 17.6263 10.8413 17.465C11.2141 17.2748 11.5113 16.7907 11.5113 16.3738C11.5113 15.9568 11.2141 15.4728 10.8413 15.2825C10.5246 15.1211 10.3555 15.1136 7.08238 15.1171C3.83612 15.1206 3.63841 15.1296 3.34088 15.2867ZM17.1036 23.3569C17.1779 23.5006 17.5363 23.9281 17.9 24.307L18.5613 24.9958L12.2845 31.2633C8.83227 34.7105 5.88672 37.5914 5.73884 37.6654C5.37224 37.8487 4.99934 37.8343 4.62166 37.6219C4.03685 37.2932 3.79873 36.5799 4.08365 36.0102C4.21254 35.7526 16.7799 23.0957 16.9069 23.0957C16.9408 23.0957 17.0293 23.2132 17.1036 23.3569Z" fill="#555555"/>
</svg>


              </span>
              <span className={style.btnText}>Спорт</span>
          </button>
        </div>
    </Link>
    <Link to='/signin'>
        <div>
          <button type="button" className={style.enter}>
              <span className={style.btnIcon}>
              <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2517 0.170338C14.0597 0.271727 13.8719 0.464929 13.7687 0.667286C13.6025 0.993125 13.5998 1.14735 13.5998 10.2094V19.4204L13.7832 19.7469C13.9001 19.9549 14.0926 20.1342 14.3138 20.2413C14.635 20.3968 14.8325 20.4093 16.9654 20.4093H19.2701L20.4039 21.9222C21.5689 23.4767 21.8884 23.7693 22.4198 23.7693C22.9513 23.7693 23.2708 23.4767 24.4358 21.9222L25.5696 20.4093H33.7543C41.7674 20.4093 41.9462 20.4058 42.286 20.2413C42.5072 20.1342 42.6996 19.9549 42.8165 19.7469L43 19.4204V10.2094C43 1.14365 42.9973 0.993209 42.8309 0.66695C42.722 0.453505 42.5436 0.275087 42.3302 0.166222C42.0019 -0.0012752 41.8672 -0.00287122 28.2822 0.000824811C14.7916 0.00452084 14.5606 0.00729287 14.2517 0.170338ZM40.48 10.2032V17.8893H32.5756C25.509 17.8893 24.6412 17.9035 24.3885 18.0235C24.1964 18.1147 23.8458 18.5054 23.2957 19.2415C22.8503 19.8376 22.4561 20.3253 22.4198 20.3253C22.3835 20.3253 21.9894 19.8376 21.544 19.2415C20.9938 18.5054 20.6433 18.1147 20.4512 18.0235C20.2165 17.912 19.8245 17.8893 18.1441 17.8893H16.1198V10.2032V2.51715H28.2999H40.48V10.2032ZM21.4978 5.16645C20.1973 5.53118 19.2093 6.64293 18.9714 8.00911C18.7886 9.05912 19.1307 10.1381 19.9066 10.9585C20.3715 11.4501 21.1418 11.8935 21.6806 11.9797C21.8562 12.0077 21.9998 12.065 21.9998 12.1068C21.9998 12.1488 21.7403 12.4369 21.4232 12.7472C20.7409 13.4146 20.6558 13.559 20.6558 14.0493C20.6558 14.5004 20.9087 14.9077 21.3265 15.1297C21.9285 15.4496 22.3925 15.2937 23.252 14.483C24.0649 13.7161 24.6143 12.9724 25.1104 11.9672C25.6969 10.7787 25.8837 10.0175 25.8936 8.7752C25.9003 7.93713 25.8723 7.69504 25.7278 7.33929C25.3338 6.36959 24.5994 5.62593 23.701 5.28716C23.0688 5.04876 22.1056 4.99593 21.4978 5.16645ZM28.2657 5.23667C27.1464 5.91422 27.6422 7.55719 28.9659 7.55719H29.3026L29.3262 11.0642C29.3498 14.5543 29.3508 14.5725 29.54 14.8377C29.7808 15.1753 30.3643 15.4104 30.7718 15.334C31.141 15.2647 31.5632 14.9162 31.7133 14.5569C31.8048 14.338 31.8279 13.4566 31.8279 10.1904C31.8279 6.23006 31.8224 6.08668 31.6549 5.74076C31.3772 5.16704 31.0121 5.03709 29.6803 5.03759C28.6869 5.03801 28.5657 5.05506 28.2657 5.23667ZM34.1982 5.17367C33.3782 5.58746 33.2872 6.78917 34.0356 7.32207C34.1925 7.43379 34.463 7.51788 34.7392 7.54081L35.1879 7.57802V10.9723C35.1879 14.7177 35.1934 14.762 35.7034 15.1257C35.9142 15.2761 36.0964 15.3273 36.4208 15.3273C36.8906 15.3273 37.1758 15.1734 37.4927 14.7489C37.6624 14.5217 37.666 14.429 37.666 10.2032C37.666 5.97739 37.6624 5.88474 37.4927 5.65752C37.0953 5.1252 36.9612 5.0811 35.6651 5.05683C34.6916 5.0386 34.4235 5.05993 34.1982 5.17367ZM23.1112 7.87379C23.6385 8.40115 23.4288 9.22923 22.7041 9.48182C22.3951 9.5895 22.3336 9.58564 22.0348 9.43981C21.815 9.33246 21.6526 9.17 21.5452 8.95026C21.3994 8.65147 21.3955 8.58998 21.5032 8.28094C21.7558 7.55618 22.5839 7.34652 23.1112 7.87379ZM5.87648 17.3096C5.64296 17.3589 5.13064 17.829 3.21525 19.751C1.0115 21.9625 0.821906 22.1763 0.541932 22.7659C-0.406352 24.7629 -0.107814 27.4055 1.41924 30.5314C2.91008 33.5835 5.18742 36.3735 8.18171 38.8168C10.7283 40.8946 13.6167 42.3693 16.0778 42.8478C16.839 42.9959 18.5477 42.9957 19.1438 42.8474C19.3979 42.7841 19.8876 42.6038 20.232 42.4465C20.8188 42.1786 21.0058 42.0137 23.1994 39.8319C24.4871 38.5513 25.5787 37.4339 25.6252 37.3489C25.751 37.1192 25.7277 36.5058 25.5828 36.2318C25.3777 35.8438 19.3832 29.9185 19.1438 29.8672C18.3235 29.6912 18.3082 29.6996 16.8597 31.138L15.5296 32.4587L15.1471 32.251C14.5181 31.9095 13.3476 30.9972 12.6737 30.3234C11.9992 29.649 11.0875 28.4789 10.7452 27.8484L10.5368 27.4644L11.8218 26.1773C12.8513 25.1462 13.121 24.828 13.1774 24.5776C13.3302 23.9003 13.3042 23.8673 10.0434 20.5927C8.37273 18.9148 6.93103 17.5008 6.83972 17.4505C6.56755 17.3005 6.18434 17.2445 5.87648 17.3096ZM8.22212 22.2977L10.1932 24.2701L9.04902 25.4267C7.47258 27.0204 7.4425 27.1577 8.33022 28.7074C9.10194 30.0543 9.82384 30.9997 10.9106 32.0865C12.0059 33.1818 12.9719 33.92 14.2913 34.6698C15.8449 35.5529 15.9776 35.5236 17.5706 33.9479L18.7275 32.8035L20.7202 34.7962L22.7127 36.7888L21.1173 38.388C19.3232 40.1862 19.0421 40.3775 18.075 40.4586C16.3292 40.6049 13.9195 39.7382 11.4157 38.0634C8.16063 35.886 5.27781 32.6852 3.72388 29.5234C2.82919 27.7028 2.43363 26.1739 2.53728 24.937C2.61952 23.9561 2.77156 23.73 4.55019 21.9429C5.43556 21.0532 6.18048 20.3253 6.20551 20.3253C6.23054 20.3253 7.138 21.2128 8.22212 22.2977Z" fill="#555555"/>
</svg>


              </span>
              <span className={style.btnText}>Происшествия</span>
          </button>
        </div>
    </Link>

    </div>
  )
}

export default Signin
