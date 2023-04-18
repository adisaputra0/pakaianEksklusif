let beliSekarang = document.querySelector(".beliSekarang");
        beliSekarang.addEventListener("click", () => {
            window.location.href = "#kemeja";
        });

        let search = document.querySelector(".search");
        search.addEventListener("click", () => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Maaf, fitur ini belum dibuat'
            })
        });

        function tombol() {
            return Swal.fire(
                'Berhasil Beli Barang',
                'Terima kasih sudah membeli!',
                'success'
            )
        }