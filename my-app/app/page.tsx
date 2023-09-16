import Image from 'next/image'



async function fetchQuotes(){
  const res = await fetch(
    "https://katanime.vercel.app/api/getrandom"
  )

  if (!res.ok) {
    throw new Error('Faied to Fetch')
  }

  return res.json();
}

export default async function Home() {


  const data = await fetchQuotes();
  
  return (
    <main className="grid grid-cols-1 content-center justify-self-center min-h-screen">
      <div className="mx-auto">
        {/* <h1 className="font-semibold text-xl">
          Nyahero Warudo!!
        </h1> */}
        <div>
          {
            data ? 
            // data["result"].map((item,ix)=>(
            //   <div key={ix}  className="text-center">
            //     <p >{item["english"]}</p>
            //   </div>
            // ))
            <div className="quotes">
              <p className="text-center"> &quot;
                <span className="italic">
                {data["result"][0]["english"]}
                </span> 
                &quot;</p>
              <p className="text-right">{data["result"][0]["character"]} - {data["result"][0]["anime"]}</p>
            </div>
            
            : <p>Loading</p>
          }
        </div>

      <div className="getMe flex justify-center pt-24">
        <button className="italic px-3 py-2 hover:bg-sky-400 hover:text-zinc-50 rounded text-sky-400 bg-transparent transition hover:scale-105 ease-in">
          Moo Ikkai!!
        </button>
      </div>
      </div>

    </main>
  )
}
