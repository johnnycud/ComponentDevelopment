import _ from 'lodash';

    class StubAPI {

        constructor() {
            this.fans = [
                {
                    'name': 'Piped piper',
                    'fan_name': 'spock2',
                    'phone_number': '051-42165'
                },

                {
                    'name': 'Mary Poppins',
                    'fan_name': 'bones2',
                    'phone_number': '051 45135'
                }, 

                {
                    'name': 'Peter Byrne',
                    'fan_name': 'data1',
                    'phone_number': '021-451261'
                },

                {
                    'name': 'Danny Murphy',
                    'fan_name': 'Geordi1',
                    'phone_number': '01-639025'
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

        add(n,f,p) {
            let len = this.fans.length ;
            let newLen = this.fans.push({
                name: n, fan_name : f, phone_number: p }) ;
            return newLen > len ;
        }

        update(key,n,f,p) {
            var index = _.findIndex(this.fans, 
                (fan) => fan.phone_number === key
            );      
            if (index !== -1) {
                this.fans.splice(index, 1, 
                    {name: n, fan_name: f, phone_number: p});
                return true ;
            }
            return false ;
        }

    }

    export default (new StubAPI() );