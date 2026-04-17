import React from 'react'
import MenuUp from '../../components/MainMenu/MenuUp/MenuUp';
import Raiting from '../../components/Ui/Raiting/Raiting';

import './Profile.scss';


function Profile() {
  return (
    <div className='mainMenu'>
      <MenuUp />
      <div className='profile content-width'>
        <div className='profile-sidebar'>
          <div className='profile-foto-rating'>
            <div className='p-f-r-foto'>
              <div className='p-f-r-foto-container'>
                <img src="/img/profile/avatars/letters/Р.png" />
              </div>
              <span><i class="fa fa-camera" aria-hidden="true"></i></span>
            </div>
            <div className='p-f-r-name'><p>Руслан</p></div>
            <div className='p-f-r-rating'><a className='lnk-color'><Raiting /></a></div>
          </div>
          <div className='slidebar-items'>
            <ul>
              <li><a className='lnk-color2'><h6>Мои объявления</h6></a></li>
              <li><a className='lnk-color'><h6>Заказы</h6></a></li>
              <li><a className='lnk-color'><h6>Мои отзывы</h6></a></li>
              <li><a className='lnk-color'><h6>Избранное</h6></a></li>
              <li><a className='lnk-color'><h6>Сообщения</h6></a></li>
              <li><a className='lnk-color'><h6>Уведомления</h6></a></li>
              <li><a className='lnk-color'><h6>Управление профилем</h6></a></li>
              <li><a className='lnk-color'><h6>Настройки</h6></a></li>
            </ul>
          </div>
        </div>
        <div className='profile-items'>
          <div><h1><strong>Мои объявления</strong></h1></div>
          <div className='tabs'>
            <div className='tabs-buttons'>
              <button>
                <span><h5><strong>Ждут действий</strong></h5></span>
                <span><h8><strong>1</strong></h8></span>
              </button>
              <button>
                <span><h5><strong>Активные</strong></h5></span>
                <span><h8><strong>1</strong></h8></span>
              </button>
              <button>
                <span><h5><strong>Архив</strong></h5></span>
                <span><h8><strong>7</strong></h8></span>
              </button>
            </div>
            <div className='tabs-content'>
              <div className='tabs-item'>
                <div className='item-preview'>
                  <a><img src="/img/tovar-img/tovar-min-img/hudi.jpg" alt="" /></a>
                  
                </div>
                <div className='item-content'>
                  <div className='item-deskription'>
                    <div className='item-title'><a><h4><strong>Сопровождение/Разработка сайтов на PHP, JavaScript</strong></h4></a></div>
                    <div className='item-price'><h4>3 000 ₽ за услугу</h4></div>
                    <div className='item-adress'><p class="d-text">Тюменская обл., Тюмень, жилой комплекс Озёрный Парк, р-н Калининский</p></div>
                  </div>
                  <div className='item-info'>
                    <div className='item-info-wrapper'>
                      <div className='item-counters-column'>
                        <a>
                          <span><i class="fa fa-eye" aria-hidden="true"></i></span>
                          <span>70</span>
                        </a>
                        <a>
                          <span><i class="fa fa-user-o" aria-hidden="true"></i></span>
                          <span>20</span>
                        </a>
                        <a>
                          <span><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                          <span>7</span>
                        </a>
                      </div>
                      <div><p class="d-text"><strong><h8>Истёк срок размещения</h8></strong></p></div>
                      <div className='item-message'>
                        <span><i class="fa fa-commenting cp" aria-hidden="true"></i></span>
                        <span><h8>Нет новых чатов</h8></span>
                      </div>
                    </div>
                    <div className='item-info-actions'>
                      <a className='button-color2 style-button'><h8>Опубликовать</h8></a>
                      <a className='button-color2 style-button'><h8>Редактировать</h8></a>
                      <button className='button-color2 style-button'><h8>...</h8></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='tabs-item'>
                <div className='item-preview'>
                  <a><img src="/img/tovar-img/tovar-min-img/hudi.jpg" alt="" /></a>
                  
                </div>
                <div className='item-content'>
                  <div className='item-deskription'>
                    <div className='item-title'><a><h4><strong>Сопровождение/Разработка сайтов на PHP, JavaScript</strong></h4></a></div>
                    <div className='item-price'><h4>3 000 ₽ за услугу</h4></div>
                    <div className='item-adress'><p class="d-text">Тюменская обл., Тюмень, жилой комплекс Озёрный Парк, р-н Калининский</p></div>
                  </div>
                  <div className='item-info'>
                    <div className='item-info-wrapper'>
                      <div className='item-counters-column'>
                        <a>
                          <span><i class="fa fa-eye" aria-hidden="true"></i></span>
                          <span>70</span>
                        </a>
                        <a>
                          <span><i class="fa fa-user-o" aria-hidden="true"></i></span>
                          <span>20</span>
                        </a>
                        <a>
                          <span><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                          <span>7</span>
                        </a>
                      </div>
                      <div><p class="d-text"><strong><h8>Истёк срок размещения</h8></strong></p></div>
                      <div className='item-message'>
                        <span><i class="fa fa-commenting cp" aria-hidden="true"></i></span>
                        <span><h8>Нет новых чатов</h8></span>
                      </div>
                    </div>
                    <div className='item-info-actions'>
                      <a className='button-color2 style-button'><h8>Опубликовать</h8></a>
                      <a className='button-color2 style-button'><h8>Редактировать</h8></a>
                      <button className='button-color2 style-button'><h8>...</h8></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Profile;