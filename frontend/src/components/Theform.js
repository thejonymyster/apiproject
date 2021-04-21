// import something?? from './youtubeapi'
// import 
import Form from "./Forms"

class Theform extends Component {

    const [data, setData] = useState()
    const [example, setexample] = useState()
    var myurl = ""
    var wikisteal = ""

    // bind some shit here

    handleChange() = e => {
        //fix this obviously
        this.state.setexample = youtubeapi(e) (or something???)
        this.state.settheotherone = wikitest(e) ???
    }

    handleSubmit() = e => {

    }

    return (
        <>
            <Form 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                Input={this.state.Input}              
            />

            <iframe url= myurl></iframe>

            <article>
                <wikitest input={this.state.input}/>
            </article>
        </>
    )
}