# FRJ-2_JSX_Component_State
Apa itu JSX, Component dan Use State?

- <b>JSX</b> adalah singkatan dari JavaScript XML. Ini memungkinkan penulisan HTML dalam JavaScript dan mengubah tag HTML menjadi elemen Bereaksi.
- <b>Component</b> adalah blok bangunan dari aplikasi React. Mereka memungkinkan kami membagi UI menjadi bagian-bagian yang independen dan dapat digunakan kembali, dan memikirkan setiap bagian secara terpisah.
- <b>Use State</b> merupakan dikelola di dalam komponen (mirip dengan variabel yang dideklarasikan dalam suatu fungsi). <b>Props</b> (kependekan dari "properties") dan state 
  keduanya adalah objek JavaScript biasa. Meskipun keduanya menyimpan informasi yang memengaruhi output render komponen, keduanya berbeda dalam satu hal penting: 
  props diteruskan ke komponen (mirip dengan parameter fungsi)

Sumber : https://roadmap.sh/react

Ada beberapa package untuk instalasi serta menjalankan aplikasi ini menggunakan vite, yaitu :

1. buka cmd
2. pilih lokasi folder yang diinginkan
3. pnpm create vite
4. buat project
5. pilih framework "React"
6. pilih bahasa "Javascript"
7. masuk ke folder nya "cd 1_Create_React_App"
8. lalu "pnpm install"
9. terakhir jalankan foldernya dengan "code ."
10. Folder tersebut siap dipakai!

Setelah dijalankan folder tersebut pilih App.jsx untuk menjalankan eksekusi seperti dibawah ini :

    import React from 'react'

    //merupakan component yang bernama App 
    export default function App() {

      //ini merupakan state
      const [hallo, setHallo] = useState("Selamat Pagi")

      //bagian ini merupakan JSX 
      return(
        <div>
          <h1>{hallo}</h1>
        </div>
      )

     }

