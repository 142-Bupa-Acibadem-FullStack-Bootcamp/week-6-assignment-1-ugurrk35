# week-6-assignment-1

### Bir sayı dizisi ve hedef değeri veriliyor. Toplamı, hedefe eşit olan ikililerin indexlerini dönen fonksiyonu yazınız.

- **Örnek 1:**

Input: nums = [2,7,11,15], target = 9\
Output: [0,1]\
Output: Çünkü nums[0] + nums[1] == 9,  return [0, 1].

- **Örnek 2:**

Input: nums = [3,2,4], target = 6\
Output: [1,2]

- **Örnek 3:**

Input: nums = [3,3], target = 6\
Output: [0,1]
 
### Kullanılan metodlar
```cs
new Map();  //(key:value) lenght
```
![Adsız](https://user-images.githubusercontent.com/67828030/151071214-dcef0700-4157-4016-adce-cb1a394bf458.png)
for döngüsünün 2.turda map() metodu değeri ve key i

Harita, anahtarların herhangi bir veri türü olabileceği anahtar/değer çiftlerini tutar.Orjinal ekleme sırasını hatırlar. Bir Harita, haritanın boyutunu temsil eden bir özelliğe sahiptir.

```cs
has();
```
Haritada bir anahtar varsa true döndürür


```cs

get();

```
Haritadaki bir anahtarın değerini alır

```cs

set();

```
Haritadaki bir anahtarın değerini ayarlar.mevcut Harita değerlerini değiştirmek için de kullanılabilir:


###  Kodun açıklaması

Dizi içerisindeki sayıları 9 dan çıkartıp çıkan farkı dizi içerinde arıyoruz.ilk for döngüsünde indexmap'in içindeki değer 2,0, set() metodu ile yazdırıyoruz.ikinci döngüde 
 let fark = target - nums[i];  fark 2 çıkıyor. indexMap.has(fark) methodu ile mapta 2 varmı diye arıyor.Bulduğu zaman true döndürüp sonuc[1] = i; 7 'nin indeksini sonucun 1. indeksini yazıyoruz. sonuc[0] = indexMap.get(fark);  methodu ile farkın (2) map taki  values unu alıp sonucun 0'rıncı (sonuc[0] ) indeksine atıyoruz .
 sonuc [ 0, 1 ]

```cs
let nums = [2,7,11,15];
let target = 9;

let twoSum = function (nums, target) {

    let sonuc = [];


    let indexMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let fark = target - nums[i];
        if (indexMap.has(fark)) {
            sonuc[1] = i;
            sonuc[0] = indexMap.get(fark);
            break;
        } else {
            indexMap.set(nums[i], i);
        }
    }
    return sonuc;
};
let s = twoSum(nums,target);
console.log(s);
```
###  2.TURDA ALDIĞI DEĞERLER
![2 turda](https://user-images.githubusercontent.com/67828030/151071972-735a8022-f6fe-4e0c-9a5d-73ac89ac317f.PNG)


###  AYNI KODUN KISALTILMIŞI
```cs
let nums = [2,7,11,15];
let target = 9;

let twoSum = function(nums, target) {
    let map = new Map();

    for(let i = 0; i < nums.length; i ++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
};
let s = twoSum(nums,target);
console.log(s);
```
###  Kod İyileştirilmesi
#####  Kötü Kod
```cs
    for(let i = 0; i < nums.length; i ++) {
```
#####  Daha iyi Kod
```cs
   let l = nums.length;
for (let i = 0; i < l; i++) {
```

For ifadesi de dahil olmak üzere bir döngüdeki her ifade, döngünün her yinelemesi için yürütülür.
Döngünün dışına yerleştirilebilecek ifadeler veya atamalar, döngünün daha hızlı çalışmasını sağlayacaktır.

Kötü kod, döngü her yinelendiğinde bir dizinin uzunluk özelliğine erişir.

Daha iyi kod, uzunluk özelliğine döngü dışında erişir ve döngünün daha hızlı çalışmasını sağlar.
Kaynak:  w3schools.com/js/js_performance.asp
###  Performans karşılaştırılması
uzun kod - kısa kod - kısa kodun for döngüsü değiştirilen kod 

![perfor](https://user-images.githubusercontent.com/67828030/151076109-f34b2905-80ab-413a-bed3-d4116e9eb883.PNG)

