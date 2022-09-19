// ----------------react & hooks-------------------------------------
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// ----------------style & css---------------------------------------
import { Row, Col, Form, FormControl } from 'react-bootstrap';
// ----------------components & data---------------------------------
import { Footer, TextEditor } from 'components/common';
// ----------------reducer---------------------------------

import { update, updateDataId, updateDataContents } from 'modules/reducer';
import styles from './studyUpdate.module.css';

function StudyUpdate() {
  const { id } = useParams();
  const postId = parseInt(id, 10);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef([]);

  // ----------------- 수정 원하는 해당 게시글 가저오기-----------------
  const state = useSelector(data => data.getUpdateData);

  //  ----------------------해당 게시글 값들을 state값에 저장-----------------------

  const [inputs, setInputs] = useState({
    category: '',
    title: '',
    subTitle: '',
  });
  const [body, setBody] = useState('');

  const [Image, setImage] = useState('');
  const [ImageFile, setImageFile] = useState('');
  const [originDelete, setOriginDelete] = useState(false);

  useEffect(() => {
    setInputs({
      title: state.title,
      subTitle: state.subTitle,
      category: state.category,
    });
    setBody(state.body);
    inputRef.current[0].focus();
  }, []);

  // ------------------------------- 입력하지 않은 input으로 이동 + focus------------------------------
  const handleIndexClick = index => {
    inputRef.current[index].scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
    setTimeout(() => {
      inputRef.current[index].focus();
    }, 100);
  };

  // ------------------------게시글 수정 로직(실시간 글입력)-------------------------
  const { category, title, subTitle } = inputs;
  const onChange = useCallback(
    e => {
      const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
      setInputs({
        ...inputs,
        [name]: value, // name 키를 가진 값을 value 로 설정 (이때 [name]은 계산된 속성명 구문 사용)
      });
    },
    [inputs],
  );

  const imageHandler = e => {
    setOriginDelete(true);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    setImage(e.target.files[0]);
    return new Promise(resolve => {
      reader.onload = () => {
        setImageFile(reader.result);
        resolve();
      };
    });
  };

  // -------------------------- 수정한 게시글 올리기----------------------
  const updateData = () => {
    if (title === '') {
      // eslint-disable-next-line no-alert
      alert('제목을 작성해주세요');
      handleIndexClick(0);
      return;
    }
    if (category === '') {
      // eslint-disable-next-line no-alert
      alert('카테고리를 작성해주세요');
      handleIndexClick(1);
      return;
    }
    if (subTitle === '') {
      // eslint-disable-next-line no-alert
      alert('부제목을 작성해주세요');
      handleIndexClick(2);
      return;
    }
    if (body === '') {
      // eslint-disable-next-line no-alert
      alert('본문을 작성해주세요');
      handleIndexClick(3);
      return;
    }
    const inputData = new FormData();
    inputData.append('category', category);
    inputData.append('title', title);
    inputData.append('subTitle', subTitle);
    inputData.append('body', body);
    inputData.append('image', Image);
    dispatch(updateDataId(id));
    dispatch(updateDataContents(inputData));
    dispatch(update());
    navigate('/studyMain');
    window.location.reload();
  };

  const goBack = () => {
    navigate('/studyMain');
  };
  return (
    <div className={styles.fullLayout}>
      <div className={styles.writeBg}>
        <div className={styles.writeText}>
          <Row className={styles.title}>
            {/* -------------title-------------- */}
            <Col sm={8} className={styles.form}>
              Title
              <Form.Control
                // eslint-disable-next-line no-return-assign
                ref={el => (inputRef.current[0] = el)}
                name="title"
                type="text"
                value={title || ''}
                onChange={onChange}
                className={styles.formTitle}
                maxLength="20"
              />
            </Col>

            {/* -------------Category-------------- */}
            <Col sm={4} className={styles.categoryLayout}>
              Category
              <select
                // eslint-disable-next-line no-return-assign
                ref={el => (inputRef.current[1] = el)}
                name="category"
                value={category || ''}
                onChange={onChange}
                className={styles.selectCategory}
                required
              >
                <option>선택</option>

                <option>Skill Study</option>
                <option>Interview & CS</option>
                <option>Coding Test</option>
                <option>Project Log</option>
              </select>
            </Col>
          </Row>
          {/* -------------Subtitle-------------- */}

          <Row className={styles.subTitle}>
            <Form.Label />
            <Col sm className={styles.form}>
              Sub Title
              <FormControl
                // eslint-disable-next-line no-return-assign
                ref={el => (inputRef.current[2] = el)}
                name="subTitle"
                onChange={onChange}
                type="text"
                value={subTitle || ''}
                className={styles.formBorder}
              />
            </Col>
          </Row>
          {/* -------------Content-------------- */}

          <Row className={styles.content}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Text area</Form.Label>
              <Row>
                <Col sm className={styles.form}>
                  <div className={styles.formBorder}>
                    <TextEditor Content={body || ''} setContent={setBody} />
                  </div>
                </Col>
              </Row>
              <h4 className={styles.imageTitle}>Thumbnail</h4>

              <div className={styles.imageBg}>
                <div className={styles.imageLocation}>
                  {originDelete === false ? (
                    <img
                      src={`http://127.0.0.1:8000${state.image}`}
                      style={{ maxWidth: '200px' }}
                      alt="이미지 업로드 실패"
                    />
                  ) : (
                    Image && <img alt="이미지없음" src={ImageFile} style={{ width: '100%' }} />
                  )}
                </div>
                <input type="file" onChange={imageHandler} />
              </div>
            </Form.Group>
          </Row>

          <div className={styles.buttonBg}>
            <button type="button" className={styles.button} onClick={updateData}>
              Update
            </button>
            <button type="button" className={styles.button} onClick={goBack}>
              Cancel
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default StudyUpdate;
