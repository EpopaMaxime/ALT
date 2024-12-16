import React, { useState } from 'react'
import ArticleImport from './ArticleImport'
import LegislationImport from './LegislationImport'
import DecisionImport from './DecisionImport'
import CommentaireImport from './CommentaireImport'
import ImportComplet from './ImportComplet'

const textTypes = [
  { value: "Article", label: "Article" },
  { value: "Législation", label: "Législation" },
  { value: "Décision", label: "Décision" },
  { value: "Commentaire", label: "Commentaire" },
  { value: "ImportComplet", label: "Import Complet" }
]

const LegalTextImporter = () => {
  const [selectedType, setSelectedType] = useState("")

  const handleTypeSelection = (event) => {
    setSelectedType(event.target.value)
  }

  const renderImporter = () => {
    switch (selectedType) {
      case "Article":
        return <ArticleImport />
      case "Législation":
        return <LegislationImport />
      case "Décision":
        return <DecisionImport />
      case "Commentaire":
        return <CommentaireImport />
      case "ImportComplet":
        return <ImportComplet/>
      default:
        return null
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Importer de textes juridiques</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Choisissez le type de texte à importer :</label>
        <select
          className="w-full border border-gray-300 p-2 rounded"
          value={selectedType}
          onChange={handleTypeSelection}
        >
          <option value="" disabled>-- Sélectionnez un type de texte --</option>
          {textTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      {renderImporter()}
    </div>
  )
}

export default LegalTextImporter
