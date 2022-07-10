
export const getImagen = async () => {

    try {

        const apiKey = '5RuT6QkFuFdKbq9SpAPnx41O8asaxxUR';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;

    } catch (error) {
        console.log(error);
        return 'No se encontro la imagen'
    }



}




