console.log("vinculado");
// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))


document.addEventListener('DOMContentLoaded', () => {

    fetchData();

});

const fetchData = async () => {
    try {
        // console.log("obteniendo datos...");
        loadingData(true);
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json()
        pintarCard(data);
    }

    catch (error) {
        console.log(error);
    }
    finally {
        loadingData(false);
    }

}

const loadingData = estado => {// estado es true o false

    const loading = document.getElementById("loading");
    if (estado) {
        loading.classList.remove("d-none");
    } else {
        loading.classList.add("d-none");
    }


}

const pintarCard = (data) => {
    console.log(data);

    const cardsDinamicas = document.getElementById('cards-dinamicas');
    const template = document.getElementById('template-card').content;
    const fragment = document.createDocumentFragment();


    data.forEach(item => {
        const clone = template.cloneNode(true);
        clone.querySelector("h5").textContent = item.title;
        clone.querySelector("span").textContent = item.price;
        clone.querySelector("img").setAttribute("src", item.image);
        fragment.appendChild(clone);

    });

    cardsDinamicas.appendChild(fragment);


};