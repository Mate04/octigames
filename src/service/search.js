import getCategoria from "@/api/getCategoria"

export function searchGame(title){
    if (!title.trim()) {
        return [];
    }
    const data = getCategoria("allSearch");
    const result = data.filter(game => game.title.toLowerCase().includes(title.toLowerCase()));
    const limitResultad = result.slice(0, 5);
    return limitResultad.map(game =>({
        title: game.title,
        description: game.description,
        thumb: game.thumb,
        md5: game.url.split('https://html5.gamemonetize.com/')[1].replace('/','')
    }));
}
