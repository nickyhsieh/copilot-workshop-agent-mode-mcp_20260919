![工作坊完成徽章](https://img.shields.io/badge/GitHub_Copilot_實戰工作坊-已完成-1F883D?style=for-the-badge&logo=githubcopilot&logoColor=white)

# 待辦清單 Web App 作品集

這是一個在 GitHub Copilot 實戰工作坊中完成的待辦清單 Web App，專注於展示如何以純前端方式建立一個可用的待辦管理工具，並結合 AI 協作流程提升開發效率與一致性。

## 線上展示

GitHub Pages：https://nickyhsieh.github.io/copilot-workshop-agent-mode-mcp_20260919/

## 功能

- 新增待辦事項
- 刪除待辦事項
- 標記項目為已完成 / 未完成
- 依狀態篩選清單：全部、未完成、已完成
- 顯示未完成數量
- 深色模式切換
- 使用 localStorage 保存待辦資料與使用者偏好
- 在空白狀態下顯示清楚的提示訊息

## 技術

這個專案採用純 HTML、CSS 與原生 JavaScript 開發，沒有使用任何前端框架，也沒有新增套件依賴。

- 前端結構：HTML
- 樣式設計：CSS
- 邏輯與互動：原生 JavaScript
- 無框架、無套件
- 資料持久化：localStorage
- 離線可用：不依賴外部 CDN 或第三方執行環境

## 開發方式

這個專案的開發流程是以 GitHub Copilot Agent Mode、MCP（Model Context Protocol）以及 `.github/prompts` 中的 agentic workflow 為基礎。

- 使用 GitHub Copilot 協助閱讀 issue、分析問題與提出修正方案
- 透過 MCP 連接 GitHub 專案資源，檢視 issue、建立分支與開啟 Pull Request
- 以 prompt 腳本化工作流程，讓修正任務有明確步驟：讀 issue、提出計畫、修改程式、驗證、提交、建立 PR
- 在本地端維持簡潔的前端結構，讓修改範圍集中且容易追蹤

這種方式有助於讓 AI 協作更符合實際軟體開發流程，而不只是單純生成程式碼。

## 我學到什麼

- 如何把需求轉為可驗證的修正事項，並依 issue 逐步處理
- GitHub Copilot 在實務工作流中的角色，不只是寫程式，而是協助分析與執行流程
- 以最小變更方式修正 UI 與資料狀態問題，避免不必要的重構
- localStorage 在前端專案中的實際使用方式，讓資料能在重新整理後保留
- Agentic workflow 能讓開發步驟更一致，從問題定義到提交與 PR 都更有條理

---

這份作品集是對目前專案成果的簡要整理，重點在於展示個人如何利用 AI 協作工具完成一個完整、可運作的前端作品。