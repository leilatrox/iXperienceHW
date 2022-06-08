const url = 'https://catfact.ninja/fact'

async function getFact() {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Tye': 'application/json',
    }
  });

  return response.json();
}

async function init() {
  const para = document.getElementById('para');
  try {
    const fact = await getFact();
    para.innerHTML = fact.fact;
  } catch(err) {
    console.log(err);
  }
}

init();