import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Bold from '@ckeditor/ckeditor5-build-classic/'
import './textEditor.css'
function CkEditor(props) {

    // const editorConfiguration = {
    //     plugins: [Paragraph, Bold, Italic, Essentials],
    //     toolbar: ["bold", "italic"],
    //     // place
    //   };
      

    const onChange = (event, editor) => {
        props.setContent(editor.getData());
        console.log(props.Content)
      
    }

  
    return (
        <>
            <CKEditor
                editor={ClassicEditor}
                config={{
                    // editorConfiguration,
                    placeholder: '글을 작성해주세요',
                    // extraPlugins: [props.uploadPlugin]
                }}
                data= {props.Content}
                onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor)
                }}
                onChange={onChange}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor)
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor)
                }}
            />
        </>
    )
}

export default CkEditor
