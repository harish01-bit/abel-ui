
export const setLocalStorage = (key: string, value: any): any => {

    localStorage.setItem(key, JSON.stringify(value));
}
export const getLocalStorage = (key: string) => {
    const val = localStorage.getItem(key)
    if (val)
        return JSON.parse(val);
    else
        return null;

}
export const clearStorage = (key: string) => {
   localStorage.removeItem(key)

}
export const clearUserDetails= () => {
    clearStorage("user")
    clearStorage("key")
 
 }