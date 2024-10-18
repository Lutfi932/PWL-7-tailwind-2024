let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `...`;
   task.innerHTML = `
         <div class="flex gap-20 border-2 border-style items-center px-5 bg-gradient-to-r from-bg-slate-700 via-slate-400 to-bg-slate-300 border-slate-600 h-[40px] w-full rounded-lg">
            <p class="h-[25px] text-slate-300 justify-center text-center w-full">${title}</p>
            <div class="flex gap-8">
               <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                     class="w-[100px] h-[25px] bg-slate-500 text-slate-300 rounded-lg">
               <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                     class="w-[100px] h-[25px] bg-slate-500 text-slate-300 rounded-lg">
            </div>
         </div>
   `;
   task.style.opacity = "1";
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}
