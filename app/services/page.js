import React from 'react'
import Container from '@/components/Container';
import Title from '@/components/Title';

function ServicePage() {
    return (
        <Container>
            <div>
                <Title title={"誰でも簡単に操作できる確定申告アプリです"} />
                <div>
                    <p>
                        <strong>直感的なUI/UX:</strong>誰でも簡単に操作できる直感的なインターフェースを提供。確定申告が初めての方でも迷うことなく申告作業を進められます。
                    </p>
                    <p>
                        <strong>自動計算機能:</strong> 収入、控除項目を入力するだけで、自動的に税額を計算。最新の税法に基づいた正確な計算が可能です
                    </p>
                    <p>
                        <strong>電子申請対応:</strong>
                        完成した申告書はアプリから直接税務署に電子申請。書類の郵送や税務署への持参が不要になります。
                    </p>
                </div>

                <div>
                    <h2>こんな方におすすめ</h2>
                    <ul>
                        <li>確定申告が初めてで不安な方</li>
                        <li>忙しくて確定申告にかける時間がない方</li>
                        <li>節税に興味があるが、どうすればいいかわからない方</li>
                        <li>確定申告の手続きをもっと効率的に済ませたい方</li>
                    </ul>
                    <p>「TaxMaster」で、確定申告の新しいスタンダードを体験しましょう。もう確定申告で悩む必要はありません。「TaxMaster」があなたの確定申告をシンプルでスマートなものに変えます。今すぐダウンロードして、確定申告の新しい形を体験してください。</p>
                </div>
            </div>
        </Container>
    )
}

export default ServicePage