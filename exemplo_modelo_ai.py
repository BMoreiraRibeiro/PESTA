#!/usr/bin/env python3
"""
Exemplo de modelo AI simples usando scikit-learn
Este script demonstra um modelo de classificação básico
"""

import numpy as np
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import matplotlib.pyplot as plt


def main():
    """Função principal para treinar e avaliar o modelo"""
    
    print("🤖 Carregando dataset Iris...")
    # Carregar dataset de exemplo
    iris = load_iris()
    X, y = iris.data, iris.target
    
    # Dividir em treino e teste
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    
    print(f"📊 Tamanho do conjunto de treino: {len(X_train)}")
    print(f"📊 Tamanho do conjunto de teste: {len(X_test)}")
    
    # Criar e treinar o modelo
    print("\n🔧 Treinando modelo Random Forest...")
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    
    # Fazer predições
    print("\n🔍 Fazendo predições...")
    y_pred = model.predict(X_test)
    
    # Avaliar o modelo
    accuracy = accuracy_score(y_test, y_pred)
    print(f"\n✅ Acurácia do modelo: {accuracy:.2%}")
    
    print("\n📈 Relatório de classificação:")
    print(classification_report(y_test, y_pred, target_names=iris.target_names))
    
    # Visualizar importância das features
    feature_importance = model.feature_importances_
    features = iris.feature_names
    
    plt.figure(figsize=(10, 6))
    plt.bar(features, feature_importance)
    plt.xlabel('Features')
    plt.ylabel('Importância')
    plt.title('Importância das Features no Modelo')
    plt.xticks(rotation=45, ha='right')
    plt.tight_layout()
    plt.savefig('feature_importance.png')
    print("\n📊 Gráfico salvo como 'feature_importance.png'")


if __name__ == "__main__":
    main()
