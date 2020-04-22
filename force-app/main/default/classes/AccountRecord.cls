// public with sharing class AccountRecord {
//     @AuraEnabled(Cacheable=true)
//     public static List<Account> getAccountList() 
//     {
//             return [SELECT Id, Name, Phone FROM Account LIMIT 10];
//      }
//     }
public with sharing class AccountRecord {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [
                SELECT Name, Phone 
                FROM Account 
               ];
    }
}




//     @AuraEnabled(cacheable=true)
//     public static List<Account> findAccount(String searchKey) {
//         String key = '%' + searchkey + '%';
//         return [
//             SELECT Name, Phone
//             FROM Account
//             Where Name LIKE :key 
//             LIMIT 10
//         ];
//     }
 
//     @AuraEnabled(cacheable=true)
//     public static List<Account> findsingleAccount(String searchKey) {
//         return [
//             SELECT Name, Phone
//             FROM Account
//             LIMIT 1
//         ];
//     }
// }
