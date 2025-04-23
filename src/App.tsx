import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import smart from "./assets/smart.png";
import drums from "./assets/drums.png";
import smileArrow from "./assets/smile-arrow.png";
import gift from "./assets/gift.png";
import cashback from "./assets/cashback.png";
import percent from "./assets/percent.png";
import free from "./assets/free.png";
import transfer from "./assets/transfer.png";
import cash from "./assets/cash.png";
import discount from "./assets/discount.png";
import family from "./assets/family.png";
import face1 from "./assets/face1.png";
import face2 from "./assets/face2.png";
import face3 from "./assets/face3.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";

interface Product {
  title: string;
  text: string;
  image: string;
}

const familyProducts: Array<Product> = [
  {
    title: "Все преимущества доступны близким",
    text: "Делитесь бесплатно до конца года",
    image: family,
  },
];

const products: Array<Product> = [
  {
    title: "+1 топовая категория с кэшбэком 5%",
    text: "Дополнительная категория каждый месяц",
    image: smileArrow,
  },
  {
    title: "+1 попытка крутить барабан суперкэшбэка",
    text: "Выше шанс выиграть до 100% в случайной категории",
    image: drums,
  },
  {
    title: "Эксклюзивный кэшбэк от партнёров",
    text: "Доступ к особой подборке",
    image: gift,
  },
  {
    title: "Увеличенный лимит кэшбэка",
    text: "7000 ₽ в месяц вместо 5000 ₽ за покупки в категориях",
    image: cashback,
  },
  {
    title: "+3% годовых",
    text: "По накопительному Альфа-Счёту на ежедневный остаток",
    image: percent,
  },
  {
    title: "Бесплатные уведомления",
    text: "Пуши и смс об операциях по всем дебетовым картам",
    image: free,
  },
  {
    title: "Бесплатные переводы",
    text: "По России без ограничений по сумме",
    image: transfer,
  },
  {
    title: "Бесплатное снятие наличных",
    text: "В банкоматах любых банков России",
    image: cash,
  },
  {
    title: "Скидка 20% на комиссию на бирже",
    text: "0,24% за сделки с ценными бумагами и валютой",
    image: discount,
  },
];

export const App = () => {
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = () => {
    window.gtag("event", "4735_get_sub", {
      variant_name: "4735_2",
    });

    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={smart} alt="Картинка Альфа-Смарт" />
          <Typography.TitleResponsive
            tag="h1"
            view="medium"
            font="system"
            weight="bold"
          >
            Альфа-Смарт
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="secondary">
            Первый месяц бесплатно, <br /> далее — 399 ₽ в месяц
          </Typography.Text>

          <Gap size={2} />

          <div className={appSt.newAdd}>
            <div className={appSt.newAddImageContainer}>
              <div className={appSt.newAddImageWrapper}>
                <img
                  src={face1}
                  alt=""
                  width={40}
                  height={40}
                  className={appSt.newAddImage}
                />
              </div>
              <div
                className={appSt.newAddImageWrapper}
                style={{ marginLeft: "-20px" }}
              >
                <img
                  src={face2}
                  alt=""
                  width={40}
                  height={40}
                  className={appSt.newAddImage}
                />
              </div>
              <div
                className={appSt.newAddImageWrapper}
                style={{ marginLeft: "-20px" }}
              >
                <img
                  src={face3}
                  alt=""
                  width={40}
                  height={40}
                  className={appSt.newAddImage}
                />
              </div>
              <div className={appSt.newAddImageWrapperMore}>+5</div>
            </div>
            <Typography.Text view="primary-small">
              7 ваших друзей уже подключили Альфа-Смарт
            </Typography.Text>
          </div>
        </div>

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="medium"
          >
            В вашей подписке
          </Typography.TitleResponsive>

          {products.map((product) => (
            <div className={appSt.product} key={product.title}>
              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                >
                  {product.title}
                </Typography.TitleResponsive>

                <Gap size={8} />

                <Typography.Text
                  view="primary-medium"
                  tag="p"
                  color="secondary"
                  defaultMargins={false}
                >
                  {product.text}
                </Typography.Text>
              </div>
              <img
                src={product.image}
                alt=""
                height={96}
                className={appSt.productIcon}
              />
            </div>
          ))}
        </div>

        <Gap size={32} />

        <div className={appSt.products}>
          <Typography.TitleResponsive
            font="system"
            tag="h2"
            weight="bold"
            view="medium"
          >
            Семейный доступ
          </Typography.TitleResponsive>

          {familyProducts.map((product) => (
            <div className={appSt.product} key={product.title}>
              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                >
                  {product.title}
                </Typography.TitleResponsive>

                <Gap size={8} />

                <Typography.Text
                  view="primary-medium"
                  tag="p"
                  color="secondary"
                  defaultMargins={false}
                >
                  {product.text}
                </Typography.Text>
              </div>
              <img
                src={product.image}
                alt=""
                height={96}
                className={appSt.productIcon}
              />
            </div>
          ))}
        </div>
      </div>

      <Gap size={72} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" onClick={submit}>
          Подключить
        </ButtonMobile>
      </div>
    </>
  );
};
