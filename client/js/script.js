function main() {
  document.getElementById("download").addEventListener("click", async () => {
    console.log("Getting...")
    const reader = new FileReader()
    reader.addEventListener("load", () => {
      document.getElementById("pic").src = reader.result
    })

    const response = await fetch("http://localhost:3000").then(r => r.blob())
    reader.readAsDataURL(response)


  })
}

main()