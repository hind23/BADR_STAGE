import  { useState } from 'react';
import finance from "/Tout-savoir-sur-la-finance-islamique.jpg";
import badr from "/bg_badr.svg";
import expert from "/Finance_Expert.jpg";
import logo from "/logo_removebg.png"

export const Accueil = () => {
    // État pour gérer l'affichage complet du texte
    const [isExpanded, setIsExpanded] = useState(false);

    // Fonction pour basculer l'état d'affichage
    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        < div className='w-[100vw]'>
           

            {/* Section avec l'image comme fond */}
            <div className="relative mt-[55px] h-[80vh] w-[100vw]">
                <img src={expert} alt="Expert en finance" className="absolute left-0 right-0 w-full h-full object-cover" />
                
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
                    <h2 className="text-4xl sm:text-left text-center font-bold mb-4">Financement islamique</h2>
                    <p className="text-lg mt-4 px-8 text-center max-w-3xl">
                    
                            Le financement islamique est un système financier qui respecte les principes de la loi islamique (Shariah). Il interdit les intérêts (riba) et les pratiques financières considérées comme spéculatives ou injustes. Les produits et services sont conçus pour être éthiques et conformes aux valeurs islamiques, favorisant la justice sociale et l'équité."
                            Le financement islamique est un système qui respecte les principes de la loi islamique, interdisant les intérêts et les pratiques financières injustes."
                    
                    </p>
                  
                </div>
                <img 
            src={logo} 
            alt={"logo"} 
            className="w-1/6 h-auto object-cover absolute top-10 right-4 " // Adjust width and positioning
          />
            </div>

            {/* Contenu principal */}
            <div className="font-roboto h-fit" style={{
                backgroundImage: `url(${badr})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                width: '100vw', // Set the width to 100vw
                display: 'flex',
                flexDirection: 'column',
            }}>

        
                {/* Flex container to align text and image horizontally */}
                <div className="sm:flex items-center justify-center space-x-8 mt-4 mr-10 ml-10">
                    {/* Titles and Paragraph */}
                    <div className="sm:w-1/2 bg-white rounded-lg p-8">
                        <h2 className="font-bold text-[36px] mb-2">Banque islamique</h2>
                        <p className="text-[20px] font-semibold mb-4">
                            Conformément à la loi islamique et aux directives du Conseil suprême islamique
                        </p>
                        <p className="text-[#7A838B]">
                            {isExpanded 
                                ? "La Banque d'Agriculture et de Développement Rural propose une gamme de plus de 16 produits financiers conformes aux principes de la finance islamique, selon la loi islamique et les directives du Conseil Suprême Islamique. Que vous soyez un particulier ou une institution, vous pouvez bénéficier de services tels que l'ouverture de comptes courants islamiques, de comptes d'épargne, ou de comptes \"petits\" pour les jeunes épargnants. En plus, la banque offre des transactions financières de type Mourabaha, un système de financement éthique et transparent basé sur l'achat et la vente de biens, idéal pour concrétiser vos projets personnels ou professionnels, tout en respectant les valeurs de la Shariah."
                                : "La Banque d'Agriculture et de Développement Rural propose une gamme de plus de 16 produits financiers conformes aux principes de la finance islamique. Que vous soyez un particulier ou une institution, vous pouvez bénéficier de services tels que l'ouverture de comptes courants islamiques, de comptes d'épargne, ou de comptes \"petits\" pour les jeunes épargnants."
                            }
                        </p>
                        <button 
                            className="text-white bg-[#085526] py-2 px-5 mt-2 rounded" 
                            onClick={toggleText}
                        >
                            {isExpanded ? "Lire moins" : "Lire plus"}
                        </button>
                    </div>
                    {/* Image */}
                    <img src={finance} alt="Finance islamique" className="block mx-auto sm:w-1/2  rounded-lg mr-10" />
                </div>
            </div>
        </div>
    );
};
