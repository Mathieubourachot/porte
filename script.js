const genererNombreAleatoire = () => {
	// Générer un nombre entre 1 et 100
	const nombreDecimal = (Math.random() * 100) + 1
	const nombre = Math.trunc(nombreDecimal)

	// Retourner ce nombre
	return nombre
}

let numeroTentative = 1
let nombreBas = 1
let nombreHaut = 100


const nombreATrouver = genererNombreAleatoire()

console.log(nombreATrouver)

const ajouterTextAuContainer = texte => {
	const divTexte = document.createElement('div')
divTexte.textContent = texte

	const container = document.getElementById('container')
	container.insertBefore(divTexte, container.firstChild)

}

const proposerNombre =() => {
	// Récupérer le champs avec le nombre
	const input = document.getElementById('input-nombre')

	// Récupérer la valeur du champs
	const valeur = input.value

	// Vérifier que la valeur n'est pas vide
	if (valeur === '') {
		// Si elle est vide, ne rien faire
		return	
	}
		



	// Transformer la valeur texte en nombre
	const nombrePropose = parseInt(valeur, 10)


	ajouterTextAuContainer('Tentative' + numeroTentative)
	

	
	// Comparer le nombre avec le nombre a trouver
	// Le nombre est égal au nombre à trouver
	if (nombrePropose === nombreATrouver) {
	// La partie est finie 
	// Afficher Bravo
	console.log('Bravo')

	ajouterTextAuContainer('Bravo')

	const elementCentre = document.getElementById('centre')
	elementCentre.textContent = nombrePropose
	
	
	// Finir
	


	} else {
	// Le nombre est faux 
	// Si le nombre est plus grand
	if (nombreATrouver > nombrePropose) {
		// Afficher plus grand
		console.log('Le nombre est plus grand')

		ajouterTextAuContainer('C\'est plus grand')

		// Si le nombre est supérieur au plus bas déjà trouvé
		if (nombrePropose > nombreBas) {
			const elementBas = document.getElementById('bas')
			elementBas.textContent = nombrePropose +'+'
		
			nombreBas = nombrePropose

		}

		

		} else {
		// Si le nombre est plus petit
		// Afficher plus petit
		console.log('Le nombre est plus petit')

		ajouterTextAuContainer('C\'est plus petit')

		// Si le nombre est inférieur au plus haut déjà trouvé
		if (nombrePropose <nombreHaut) {
			const elementBas = document.getElementById('haut')
			elementBas.textContent = nombrePropose +'-'
		
			nombreHaut = nombrePropose

		}


		

		}
	
		numeroTentative += 1

	}

	
	
	
	
}

// Récupérer le bouton 
// Lorsqu'il y a un click, effectuer une proposition de nombre
const bouton = document.getElementById('button-proposer')
bouton.addEventListener('click', proposerNombre)
