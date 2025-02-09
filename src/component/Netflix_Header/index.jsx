import "./Style_header.css";
const NHeader=()=>{
    return(
        <header className="header_wrapper">
            <div className="logo">Netflix</div>
            <div className="nButtons">
                <button className="singUp">Sign In</button>
                <select  className="nLang">
                    <option value="">English</option>
                    <option value="">Hindi</option>
                </select>
            </div>
        </header>
    )
}
export default NHeader;