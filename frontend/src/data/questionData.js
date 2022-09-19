import React from 'react';
import styles from './questionData.module.css';

function QuestionData1() {
  return (
    <div>
      <div className={styles.questionMargin}>
        <div className={styles.question}>
          <img
            alt="질문(이미지없음)"
            src={`${process.env.PUBLIC_URL}./static/images/question/question.png`}
            className={styles.questionImg}
          />
          내가 개발자가 되고 싶은 이유?
        </div>
        <div className={styles.moreInfoBg}>
          <div className={styles.moreInfo}>
            &nbsp; 저는 어렸을 때부터 그림 그리기와 만들기 등의 창작활동을 좋아했습니다. 창작은 저의 자유로운 상상으로
            만들어지며 저의 경혐과 지식이 쌓여가며 작품의 완성도가 높아져 가는 것에 큰 흥미를 느꼈기 때문입니다. <br />
            <br />
            &nbsp;특히 프론트엔드 개발은 저의 작업에 대한 결과물이 직접적으로 보이며 마치 그림을 그리는듯 하였습니다.
            공부하고 알아가면서 쌓이는 지식을 바탕으로 조금씩 더 발전하는 틀에 박히지 않는 개발과정을 보며 뿌듯함을 느낄
            수 있었습니다. <br />
            <br /> &nbsp;또한, 그림을 그릴 때 연필, 물감 등 여러 도구를 복합적으로 사용하며 하나의 작품을 만들어가듯이
            개발 또한 여러 언어와 프레임워크와 라이브러리들을 사용하며 하나의 프로젝트를 만들어갈때 크게 빠져들게
            되었습니다. 따라서 이번엔 어떤 도구를 사용하여 어떤 작품을 만들어볼까?라는 도전정신이 계속해서 생겨났고
            계속해서 탐구하고 공부하며 나를 조금씩 성장시킬 수 있었습니다.
          </div>
        </div>
      </div>
      <div style={{ clear: 'both' }} />
    </div>
  );
}
function QuestionData2() {
  return (
    <div>
      <div className={styles.questionMargin}>
        <div className={styles.question}>
          <img
            alt="질문(이미지없음)"
            src={`${process.env.PUBLIC_URL}./static/images/question/question.png`}
            className={styles.questionImg}
          />
          나는 어떤 개발자인가?
        </div>
        <div className={styles.moreInfoBg}>
          <div className={styles.moreInfo}>
            &nbsp; <b>저는 항상 궁금해하는 개발자입니다.</b> 궁금증은 무언가를 알아가게 만들고, 파고들게하는 매력적인
            감정이라고 생각합니다. 이는 저의 지식과 견해를 넓혀주고 발전시켜줍니다. <br />
            <br /> &nbsp; <b>그리고 저는 귀가 열려있는 개발자입나다.</b> 저는 지금까지 살아오며 학교에서, 군대에서,
            알바에서도 늘 리더같은 중심역할을 많이 해왔습니다. 타인들과 사로 의견을 제시하고 의견을 듣는 것을 무엇보다
            잘하고 좋아합니다 개발자는 교류와 소통을 절대로 빼먹을 수 없는 영역이고, 저는 이 부분에 대해서는 준비된
            개발자라고 말하고 싶습니다. <br /> <br /> &nbsp;{' '}
            <b>마지막으로 저는는 요즘 자주 소개하는 MBTI유형중 극강 J(계획형)입니다.</b> 제가 생각했을 때는 개발영역은
            단계별로 나아가는 것이 정말 중요하다고 생각합니다. 차례대로 퀘스트를 성공해 나가듯이 계획을 세워 나가며
            체계적으로 개발을 진행하는 것은 제가 잘할 수 있는 분야라고 생각합니다.
          </div>
        </div>
      </div>
      <div style={{ clear: 'both' }} />
    </div>
  );
}

function QuestionData3() {
  return (
    <div>
      <div className={styles.questionMargin}>
        <div className={styles.question}>
          <img
            alt="질문(이미지없음)"
            src={`${process.env.PUBLIC_URL}./static/images/question/question.png`}
            className={styles.questionImg}
          />
          지원한 분야의 전문성과 역량을 갖추기 위하여 노력하고 있는 것은?
        </div>
        <div className={styles.moreInfoBg}>
          <div className={styles.moreInfo}>
            &nbsp; <b>현재 저의 하루 스케줄은 둘로 나뉩니다.</b>반은 전문 분야에 대한 지식을 습득하는 것이고, 반은
            습득한 지식을 바탕으로 프로젝트를 진행하는 것입니다. 저는 무언가 배웠다면 당연히 써먹어야한다는 생각합니다.
            따라서 저는 배운 것에 대한 지식을 바탕으로 토이 프로젝트를 통해 직접 사용하여 경험하고 있습니다. 처음부터 큰
            기획과 규모를 가진 프로젝트를 진행하려고 한적이 있습니다. 기초적인 지식과 배경이 없는 상태의 프로젝트는 점점
            지쳐가고 흥미를 잃을 수 밖에 없었습니다. 따라서, 지속적으로 배운 것에 대한 토이 프로젝트를 진행하며 그
            프로젝트 하나하나를 합쳐가며 여러가지 기능을 사용하고 제가 원하고자 하는 프로젝트를 진행하려고 노력합니다.
            <br />
            <br /> &nbsp; 또한,{' '}
            <b>
              저는 그 날 공부한 것에 대한 것은 반드시 블로그에 기록하고 있습니다. 이는 저에게 크게 두가지 도움이 됩니다.
            </b>{' '}
            <br />한 가지는 <b>커뮤니케이션에 도움</b>이 된다는 것입니다. 블로그에 글을 작성할 때 항상 나중에 제가 봤을
            때, 또는 남이 봤을 때 이해가 갈 수 있을 정도의 글로 작성하려고 늘 노력합니다. 그러기 위해서는 더욱더 배운
            것에 대해 깊이 파고들게 해주고 블로그 글들은 좋은 대본이 되어줍니다.
            <br />
            그리고 또 한가지는 <b>저만의 루틴을 만들어 주는 것</b>입니다. 개발자는 끊임없이 공부하고 알아가며 완성도를
            높여갑니다. 습관적으로 공부하고 지식을 습득하는 버릇을 길러주는데에 블로그 작성은 정말 도움이 됩니다.`,
          </div>
        </div>
      </div>
      <div style={{ clear: 'both' }} />
    </div>
  );
}

export { QuestionData1, QuestionData2, QuestionData3 };
