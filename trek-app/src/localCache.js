class LocalCache {
    
            constructor() {
               this.site = null ;
            }
    
            setPhone(site) {
               this.site = site ;
            }
    
            getPhone() {
               return this.site;
            }
    
        }
    
        export default (new LocalCache() );