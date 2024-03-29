import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DeckForm from "./DeckForm";

const EditDeck = ({ deck, getDeck }) => {
  const { deckId } = useParams();

  useEffect(() => {
    getDeck(deckId);
  }, [deckId]);

  return (
    deck && (
      <div>
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={`/decks/${deckId}`}>{deck && deck.name}</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Edit Deck
              </li>
            </ol>
          </nav>
        </div>
        <h2>Edit Deck</h2>
        <DeckForm editDeckData={deck} processDeck={"edit-deck"} />
      </div>
    )
  );
};

export default EditDeck;
