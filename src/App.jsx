import React, { useState } from "react";
import "./index.css";

// React Component = sebuah function / class yang mereturn JSX
// Syaratnya :
// 1. Harus dimulai dengan huruf kapital
// 2. Hanya bisa mereturn sebuah parent element
// 3. Bisa memiliki state dan props
// 4. Bisa dipanggil di component lain dengan cara <NamaComponent />
export default function App() {
    // Membuat State
    // Aritmatika Tambah 
    const [tambah, setTambah] = useState(0);

    // Arimatika Kurang
    const [kurang, setKurang] = useState(20);
    const [pengurangan, setPengurangan] = useState(10);

    // Arimatika Bagi
    const [bagi, setBagi] = useState(1);

    // Arimatika Kali
    const [kali, setKali] = useState(1);

    // Arimatika Pangkat
    const [pangkat, setPangkat] = useState(1);

    // String
    let [text, setText] = useState("Hallo...");

    // Font Size
    let [fontSize, setFontSize] = useState("45");

    // Color
    let [color, setColor] = useState("green");

    return (
        <div className="container">
            <h1>React JS - JSX, Components dan useState Hooks</h1>
            <div>
                <h2>Penjumlahan : {tambah}</h2>
                <button onClick={(element) => {
                    setTambah(tambah + 1);
                }}>Tambah</button>
            </div>
            <div>
                <h2>Pengurangan : {kurang}</h2>
                <button onClick={(element) => {
                    setKurang(kurang - 1);
                }}>Kurang</button>
            </div>
            <div>
                <h2>Pengurangan Tampa Minus : {pengurangan}</h2>
                <button onClick={(element) => {
                    if (pengurangan >= 1) {
                        setPengurangan(pengurangan - 1)
                        return;
                    }
                }}>Pengurangan</button>
            </div>
            <div>
                <h2>Bagi : {bagi}</h2>
                <button onClick={(element) => {
                    setBagi((bagi / 2));
                }}>Bagi</button>
            </div>
            <div>
                <h2>Kali : {kali}</h2>
                <button onClick={(element) => {
                    setKali((kali * 3) + 1);
                }}>Kali</button>
            </div>
            <div>
                <h2>Pangkat : {pangkat}</h2>
                <button onClick={(element) => {
                    setPangkat((pangkat ** 2) + 1);
                }}>Pangkat</button>
            </div>
            <div>
                <h2 style={{
                    fontSize: fontSize + "px",
                    color: color
                }}>Data : {text}</h2>
                <input type="text" placeholder="Masukkan Data" onChange={(element) => {
                    setText(element.target.value);
                }} />
            </div>
            <div>
                <input type="range" min={1} max={100} onChange={(element) => {
                    setFontSize(element.target.value);
                }} />
                <input type="color" onChange={(element) => {
                    setColor(element.target.value);
                }} />
            </div>
        </div>
    )
}