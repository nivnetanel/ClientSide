/*Developers-Details:*/
/*Lidan Danino 207599473
 *Niv Netanel  208540302
 *Carmel Bar   207895103*/

class StorageActions
 {
//Store in ls
    async storeCostInLocalStorage(mission, sum, category) {
    return new Promise((resolve, reject) => {
        try {
            let items;
            const currentDate = new Date();
            let month = months[currentDate.getMonth()];
            let year = currentDate.getFullYear();
            if (localStorage.getItem('items') == null) {
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            items.push({ mission, sum, category, month, year });
            localStorage.setItem('items', JSON.stringify(items));
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

//Get from ls
    async getCostsFromLs() {
    return new Promise((resolve, reject) => {
        try {
            let items = [];
            if (localStorage.getItem('items') == null) {
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            localStorage.setItem('items', JSON.stringify(items));
            resolve(items);
        } catch (error) {
            reject(error);
        }
    });
}

//Clear ls
    async clearCosts() {
    return new Promise((resolve, reject) => {
        try {
            localStorage.clear();
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}
 }
