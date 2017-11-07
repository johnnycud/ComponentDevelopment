import _ from 'lodash';

    class StubAPI {

        constructor() {
            this.fans = [
                {
                    'name': 'Piped piper',
                    'address': '321 mountain view',
                    'phone_number': '589-120'
                },

                {
                    'name': 'fan 2',
                    'address': '23 Main square',
                    'phone_number': '934-4329'
                }, 

                {
                    'name': 'fan 3',
                    'address': '4 Lower drewry lane',
                    'phone_number': '432-4532'
                },

                {
                    'name': 'fan 4',
                    'address': '49 Upper canal rd',
                    'phone_number': '934-6390'
                }
            ] ; 
        }

        delete(k) {
            let elements = _.remove(this.fans, 
                (fan) => fan.phone_number === k
            );
            return elements; 
        }
        getAll() {
            return this.fans ;
        }

        add(n,a,p) {
            let len = this.fans.length ;
            let newLen = this.fans.push({
                name: n, address : a, phone_number: p }) ;
            return newLen > len ;
        }

        update(key,n,a,p) {
            var index = _.findIndex(this.fans, 
                (fan) => fan.phone_number === key
            );      
            if (index !== -1) {
                this.fans.splice(index, 1, 
                    {name: n, address: a, phone_number: p});
                return true ;
            }
            return false ;
        }

    }

    export default (new StubAPI() );