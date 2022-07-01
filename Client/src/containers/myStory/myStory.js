import './myStory.scss'

function MyStory() {
    return (
        <div class="myStory">
            <section class="section">
                <h1>My Story</h1>
                <div class="grid">
                    <div class="item item--large">
                    <img  style={{width:'100%'}} src="assets/images/mystory1.jpeg"></img>

                        <div class="item__details">Oat cake</div>
                    </div>
                   
                    <div class="item item--medium">
                        <div class="item__details">Dragée pudding brownie</div>
                    </div>
                    <div class="item item--large">
                        <div class="item__details">toffee bear claw</div>
                    </div>
                    <div class="item">
                        <div class="item__details">cake cookie croissant</div>
                    </div>
                    <div class="item item--medium">
                        <div class="item__details">liquorice sweet roll</div>
                    </div>
                    <div class="item item--medium">
                        <div class="item__details">chocolate marzipan</div>
                    </div>
                    <div class="item item--large">
                        <div class="item__details">danish dessert lollipop</div>
                    </div>
                    <div class="item">
                        <div class="item__details">sugar plum dragée</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MyStory
