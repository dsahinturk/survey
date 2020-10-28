import { useState } from "react";

function Component(props) {
    const [deneme, setDeneme] = useState('denemeyazısı');


    return (

        <div>
            <select name="bilgi" onchange="location = this.options[this.selectedIndex].value;">
        <option selected value="">
          Seçiniz
        </option>
        <option value="index.php">Ana Sayfa</option>
        <option value="iletisim.php">İletişim</option>
      </select>
            <h1>{props.data}</h1>
            <button onClick={()=> setDeneme("değişti")}></button>
        </div>
    )
}

export default Component;
