// State Management
let mode = 'paging';
let algorithm = 'FIFO';
let frameSize = 4;
let pageSequence = '1,2,3,4,1,2,5,1,2,3,4,5';
let frames = [];
let history = [];
let pageFaults = 0;
let isRunning = false;

// Segmentation Data
const segments = [
  { id: 0, name: 'Code', base: 0, limit: 400 },
  { id: 1, name: 'Data', base: 400, limit: 300 },
  { id: 2, name: 'Stack', base: 700, limit: 200 }
];
let segmentAccess = { segment: 0, offset: 100 };

// DOM Elements
const pagingBtn = document.getElementById('pagingBtn');
const segmentBtn = document.getElementById('segmentBtn');
const pagingSection = document.getElementById('pagingSection');
const segmentSection = document.getElementById('segmentSection');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initializeSegmentation();
  setupEventListeners();
});

function setupEventListeners() {
  pagingBtn.onclick = () => switchMode('paging');
  segmentBtn.onclick = () => switchMode('segmentation');

  document.getElementById('algorithm').addEventListener('change', (e) => {
    algorithm = e.target.value;
  });

  document.getElementById('frameSize').addEventListener('change', (e) => {
    frameSize = parseInt(e.target.value);
  });

  document.getElementById('pageSeq').addEventListener('change', (e) => {
    pageSequence = e.target.value;
  });

  document.getElementById('segNum').addEventListener('change', (e) => {
    segmentAccess.segment = parseInt(e.target.value);
    updateSegmentTranslation();
  });

  document.getElementById('offset').addEventListener('input', (e) => {
    segmentAccess.offset = parseInt(e.target.value) || 0;
    updateSegmentTranslation();
  });
}

function switchMode(newMode) {
  mode = newMode;
  pagingBtn.classList.toggle('active', mode === 'paging');
  segmentBtn.classList.toggle('active', mode === 'segmentation');
  pagingSection.classList.toggle('hidden', mode !== 'paging');
  segmentSection.classList.toggle('hidden', mode !== 'segmentation');
}

// ============== PAGING FUNCTIONS ==============

function runPaging() {
  const pages = pageSequence
    .split(',')
    .map(p => parseInt(p.trim()))
    .filter(p => !isNaN(p));

  if (pages.length === 0) {
    alert('Please enter a valid page sequence');
    return;
  }

  frames = [];
  history = [];
  pageFaults = 0;
  let lruCounter = {};

  pages.forEach((page, step) => {
    let fault = false;
    let replacedPage = null;

    if (!frames.includes(page)) {
      fault = true;
      pageFaults++;

      if (frames.length < frameSize) {
        frames.push(page);
      } else {
        if (algorithm === 'FIFO') {
          replacedPage = frames.shift();
          frames.push(page);
        } else if (algorithm === 'LRU') {
          let lruPage = frames[0];
          let lruTime = lruCounter[lruPage] || 0;

          frames.forEach(p => {
            if ((lruCounter[p] || 0) < lruTime) {
              lruTime = lruCounter[p];
              lruPage = p;
            }
          });

          replacedPage = lruPage;
          frames = frames.filter(p => p !== lruPage);
          frames.push(page);
        }
      }
    }

    lruCounter[page] = step;

    history.push({
      step: step + 1,
      page,
      frames: [...frames],
      fault,
      replacedPage
    });
  });

  isRunning = true;
  displayPagingResults();
}

function displayPagingResults() {
  // Show stats card
  const statsCard = document.getElementById('statsCard');
  statsCard.classList.remove('hidden');

  const hits = history.length - pageFaults;
  const hitRate = ((hits / history.length) * 100).toFixed(1);

  document.getElementById('faultCount').textContent = pageFaults;
  document.getElementById('hitCount').textContent = hits;
  document.getElementById('hitRate').textContent = hitRate + '%';

  // Show timeline card
  const timelineCard = document.getElementById('timelineCard');
  timelineCard.classList.remove('hidden');

  // Populate timeline table
  const tbody = document.querySelector('#timeline tbody');
  tbody.innerHTML = '';

  history.forEach(entry => {
    const row = document.createElement('tr');
    row.className = entry.fault ? 'fault' : 'hit';

    // Step
    const stepCell = document.createElement('td');
    stepCell.textContent = entry.step;
    stepCell.style.fontWeight = '600';
    stepCell.style.color = '#374151';
    row.appendChild(stepCell);

    // Page Request
    const pageCell = document.createElement('td');
    const pageBadge = document.createElement('span');
    pageBadge.className = 'page-badge';
    pageBadge.textContent = entry.page;
    pageCell.appendChild(pageBadge);
    row.appendChild(pageCell);

    // Frame State
    const frameCell = document.createElement('td');
    const frameContainer = document.createElement('div');
    frameContainer.className = 'frame-container';

    entry.frames.forEach(frame => {
      const frameBox = document.createElement('div');
      frameBox.className = 'frame-box';
      if (frame === entry.page && entry.fault) {
        frameBox.classList.add('new-page');
      }
      frameBox.textContent = frame;
      frameContainer.appendChild(frameBox);
    });

    // Add empty frame boxes
    for (let i = entry.frames.length; i < frameSize; i++) {
      const emptyBox = document.createElement('div');
      emptyBox.className = 'frame-box empty';
      emptyBox.textContent = '-';
      frameContainer.appendChild(emptyBox);
    }

    frameCell.appendChild(frameContainer);
    row.appendChild(frameCell);

    // Status
    const statusCell = document.createElement('td');
    const statusDiv = document.createElement('div');

    const statusBadge = document.createElement('span');
    statusBadge.className = entry.fault ? 'status-badge status-fault' : 'status-badge status-hit';
    statusBadge.textContent = entry.fault ? 'PAGE FAULT' : 'HIT';
    statusDiv.appendChild(statusBadge);

    if (entry.replacedPage) {
      const replacedInfo = document.createElement('div');
      replacedInfo.className = 'replaced-info';
      replacedInfo.textContent = `Replaced: ${entry.replacedPage}`;
      statusDiv.appendChild(replacedInfo);
    }

    statusCell.appendChild(statusDiv);
    row.appendChild(statusCell);

    tbody.appendChild(row);
  });
}

function resetPaging() {
  frames = [];
  history = [];
  pageFaults = 0;
  isRunning = false;

  document.getElementById('statsCard').classList.add('hidden');
  document.getElementById('timelineCard').classList.add('hidden');
  document.querySelector('#timeline tbody').innerHTML = '';
}

// ============== SEGMENTATION FUNCTIONS ==============

function initializeSegmentation() {
  const segTable = document.getElementById('segmentTable');
  const segSelect = document.getElementById('segNum');
  const memoryMap = document.getElementById('memoryMap');

  // Populate segment table
  segments.forEach(seg => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td style="font-weight: 600; color: #374151;">${seg.id}</td>
      <td>
        <span class="segment-badge">${seg.name}</span>
      </td>
      <td style="font-family: monospace;">${seg.base}</td>
      <td style="font-family: monospace;">${seg.limit}</td>
      <td style="font-family: monospace; font-size: 14px; color: #64748b;">
        ${seg.base} - ${seg.base + seg.limit - 1}
      </td>
    `;
    segTable.appendChild(row);

    // Populate select
    const option = document.createElement('option');
    option.value = seg.id;
    option.textContent = `${seg.id} - ${seg.name}`;
    segSelect.appendChild(option);

    // Create memory map segments
    const box = document.createElement('div');
    box.className = 'segment-box';
    box.style.top = (seg.base / 1000) * 100 + '%';
    box.style.height = (seg.limit / 1000) * 100 + '%';
    box.innerHTML = `${seg.name}<br>${seg.base}-${seg.base + seg.limit - 1}`;
    memoryMap.appendChild(box);
  });

  // Initial translation
  updateSegmentTranslation();
}

function updateSegmentTranslation() {
  const seg = segments[segmentAccess.segment];
  const offset = segmentAccess.offset;
  const resultDiv = document.getElementById('segResult');

  if (offset >= seg.limit) {
    resultDiv.className = 'invalid';
    resultDiv.innerHTML = `
      <div class="result-title result-invalid">✗ Invalid Access</div>
      <div class="result-details">
        <strong>Logical Address:</strong> (${segmentAccess.segment}, ${offset})
      </div>
      <div class="result-answer result-invalid">
        Segmentation Fault: Offset exceeds segment limit
      </div>
    `;
  } else {
    const physicalAddress = seg.base + offset;
    resultDiv.className = 'valid';
    resultDiv.innerHTML = `
      <div class="result-title result-valid">✓ Valid Access</div>
      <div class="result-details">
        <strong>Logical Address:</strong> (${segmentAccess.segment}, ${offset})
      </div>
      <div class="result-answer result-valid">
        Physical Address: ${physicalAddress}
      </div>
    `;
  }
}
