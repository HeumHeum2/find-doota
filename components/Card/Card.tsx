import Image from "next/image";
import React from "react";

import * as S from "./style";

type Props = {};

function Card({}: Props): JSX.Element {
  return (
    <S.Flip>
      <S.Card>
        <S.Front>
          <Image
            alt="두타"
            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/308365610_644530320626263_197968840633481231_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=GL0OiPQ4RFkAX9WaTyn&edm=APU89FABAAAA&ccb=7-5&oh=00_AT-mkb0Ar98iMAjJyUUrgaOGBXOhlEdXvUTJa0pw2NQwjg&oe=63393367&_nc_sid=86f79a"
            width={250}
            height={350}
          />
        </S.Front>
        <S.Back>
          <Image
            alt="두타"
            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/297401758_357246136576115_5481285393158617993_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=js6PDAWLw_4AX-l9kl-&edm=APU89FABAAAA&ccb=7-5&oh=00_AT_1Jvrturi8dW8pKvEhuAKJSorv8NaH59yiApoo90vGHQ&oe=633A26F7&_nc_sid=86f79a"
            width={250}
            height={350}
          />
        </S.Back>
      </S.Card>
    </S.Flip>
  );
}

export default Card;
