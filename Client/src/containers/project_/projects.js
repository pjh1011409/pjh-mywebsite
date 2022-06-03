import './projects.scss'
import {Col} from 'react-bootstrap'
function Projects(){
    return(
        <div>
           <div style={{marginBottom:'100px', height:'1000px', backgroundColor:'gray'}}>
           <div class="pages" style={{height:'1300px'}}>
                <input id="one" name="trigger" type="radio"></input>
                <input id="two" name="trigger" type="radio"></input>
                <input id="three" name="trigger" type="radio"></input>
                <input id="four" name="trigger" type="radio"></input>

                
                <div class="pages_page">
                    <div class="pages_page__inner">
                        <div class="project"></div>
                        <div class="introduce">
                        <h1>프로젝트명</h1>
                        <h4>------------프로젝트 소개--------------</h4>
                        <h4>기간</h4>
                        <h4>팀원</h4>
                        </div>
                        <div class="content"></div>
                    </div>
                </div>

                <div class="pages_page">
                    <div class="pages_page__inner">
                       
                        <div class="control next">
                            <label for="two"></label>
                        </div>
                    </div>
                </div>

                <div class="pages_page">
                    <div class="pages_page__inner">
                        세번째(살색)
                        <div class="control">
                            <label for="one"></label>
                        </div>
                    </div>
                </div>

                <div class="pages_page">
                    <div class="pages_page__inner">
                        네번째(하늘색)
                        <div class="control next">
                            <label for="three"></label>
                        </div>
                        <div class="content"></div>
                    </div>
                </div>

                <div class="pages_page">
                    <div class="pages_page__inner">
                        다섯번째(초록색)
                        <div class="control">
                            <label for="two"></label>
                        </div>
                    </div>
                </div>
               

               
                <div class="pages_page">
                    <div class="pages_page__inner">여섯번째 (노랑)</div>
                </div>
                
                
            </div>
           </div>
        </div>
    )
}

export default Projects;