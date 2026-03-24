import galeriaTech1 from "../../assets/images/galeria-tech-1.png";
import galeriaTech2 from "../../assets/images/galeria-tech-2.png";
import galeriaTech3 from "../../assets/images/galeria-tech-3.png";
import galeriaTech4 from "../../assets/images/galeria-tech-4.png";
import galeriaTech5 from "../../assets/images/galeria-tech-5.png";
import galeriaTech6 from "../../assets/images/galeria-tech-6.png";
import styles from "./Gallery.module.css";
import { Overlay } from "../Overlay";
import { Button } from "../Button";
import { useRouter } from "@tanstack/react-router";

export const Gallery = () => {
  const router = useRouter();

  return (
    <div className="container">
      <div className={styles.galleryGrid}>
        <div
          className={`${styles.imageCard} ${styles.highlight} relative rounded-[20px] overflow-hidden`}
        >
          <img
            className="w-full h-full object-cover"
            src={galeriaTech1}
            alt="Estação de trabalho premium com setup completo"
            loading="lazy"
            decoding="async"
          />

          <Overlay
            title=""
            subtitle="Design pensado nos mínimos detalhes"
            className="inset-0 justify-center"
          >
            <div className="w-full flex justify-center">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => router.navigate({ to: "/products" })}
              >
                Explorar produtos
              </Button>
            </div>
          </Overlay>
        </div>

        <div
          className={`${styles.imageCard} ${styles.sneakerPurple} relative rounded-[20px] overflow-hidden`}
        >
          <img
            className="w-full h-full object-cover"
            src={galeriaTech2}
            alt="Teclado mecânico com iluminação"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div
          className={`${styles.imageCard} ${styles.model} relative rounded-[20px] overflow-hidden`}
        >
          <img
            className="w-full h-full object-cover"
            src={galeriaTech3}
            alt="Mouse ergonômico em mesa minimalista"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div
          className={`${styles.imageCard} ${styles.sneakerColor} relative rounded-[20px] overflow-hidden`}
        >
          <img
            className="w-full h-full object-cover"
            src={galeriaTech4}
            alt="Monitor ultrawide com ambiente de programação"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div
          className={`${styles.imageCard} ${styles.sneakerWhite} relative rounded-[20px] overflow-hidden`}
        >
          <img
            className="w-full h-full object-cover"
            src={galeriaTech5}
            alt="Headset e acessórios de áudio para produtividade"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div
          className={`${styles.imageCard} ${styles.sneakerSilver} relative rounded-[20px] overflow-hidden`}
        >
          <img
            className="w-full h-full object-cover"
            src={galeriaTech6}
            alt="Setup clean com monitor e periféricos"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
};
