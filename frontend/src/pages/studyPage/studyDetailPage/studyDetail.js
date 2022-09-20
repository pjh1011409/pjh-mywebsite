// ----------------react & hooks-------------------------------------
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Parser from 'html-react-parser';
// ----------------style & css---------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
// ----------------components & data---------------------------------
import { Footer } from 'components/common';
// ----------------reducer---------------------------------
import { getPost, deletePost } from 'modules/reducer';
import styles from './studyDetail.module.css';

function StudyDetail() {
  const navigate = useNavigate();

  const { id } = useParams();
  const postId = parseInt(id, 10);
  const { data, loading, error } = useSelector(state => state.posts.post[postId]) || {
    loading: false,
    data: null,
    error: null,
  }; // 아예 데이터가 존재하지 않을 때가 있으므로, 비구조화 할당이 오류나지 않도록

  // let { authTokens } = useContext(AuthContext)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);
  if (loading && !data) return <div>로딩중...</div>; // 로딩중이고 데이터 없을때만
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  const deleteNote = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('삭제하시겠습니까?')) dispatch(deletePost(data.id));
    // dispatch(getPosts)
    // eslint-disable-next-line no-alert
    alert('삭제되었습니다');
    navigate('/studyMain');
    window.location.reload();
  };

  const goToUpdate = () => {
    dispatch({ type: 'UPDATE_GO', payload: data });

    navigate(`/studyUpdate/${id}`);
  };

  return (
    <div className={styles.fullLayout}>
      <div className={styles.studyDetailBg}>
        <div className={styles.top}>
          <div className={styles.titleGroup}>
            <div className={styles.category}>
              {' '}
              <img
                alt="카테고리(이미지없음)"
                src="/static/images/studyDetail/category-icon.png"
                className={styles.studyImg}
              />
              [ {data.category} ]
            </div>
            <div className={styles.title}>
              <img
                alt="제목(이미지없음)"
                src={`${process.env.PUBLIC_URL}/static/images/studyDetail/title-icon.png`}
                className={styles.studyImg}
              />
              {data.title}
            </div>
            <div className={styles.subTitle}>
              <img
                alt="부제목(이미지없음)"
                src={`${process.env.PUBLIC_URL}/static/images/studyDetail/about-icon.png`}
                className={styles.studyImg}
              />
              : {data.subTitle}
            </div>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.content}>{Parser(data.body)}</div>
        </div>
        <div
          style={{
            width: '80%',
            marginTop: '30px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* <img src={`http://localhost:8000${data.image}`} style={{maxWidth:'300px'}} alt='이미지 업로드 실패'></img> */}
        </div>

        <div className={styles.bottom}>
          <div className={styles.button}>
            <button type="button" onClick={goToUpdate}>
              Edit
            </button>
            <button type="button" onClick={deleteNote}>
              Delete
            </button>

            <button
              type="button"
              onClick={() => {
                navigate(`/studyMain`);
                window.location.reload();
              }}
            >
              <FontAwesomeIcon icon={faHouse} />
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default StudyDetail;
