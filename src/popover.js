export default class Popover {
    constructor(triggerEl, title, content) {
        this.triggerEl = triggerEl;
        this.title = title;
        this.content = content;
        this.popoverEl = null;

        this.toggle = this.toggle.bind(this);
        this.onDocumentClick = this.onDocumentClick.bind(this);

        this.triggerEl.addEventListener('click', this.toggle);
    }

    createPopover() {
        const pop = document.createElement('div');
        pop.className = 'popover';
        pop.style.position = 'absolute';

        const header = document.createElement('div');
        header.className = 'popover-header';
        header.textContent = this.title;

        const body = document.createElement('div');
        body.className = 'popover-body';
        body.textContent = this.content;
        const arrow = document.createElement('div');
        arrow.className = 'popover-arrow';

        pop.appendChild(header);
        pop.appendChild(body);
        pop.appendChild(arrow);

        document.body.appendChild(pop);
        this.popoverEl = pop;
    }

    positionPopover() {
        const rect = this.triggerEl.getBoundingClientRect();
        const popRect = this.popoverEl.getBoundingClientRect();

        const top = window.scrollY + rect.top - popRect.height - 6; 
        const left = window.scrollX + rect.left + rect.width / 2 - popRect.width / 2;

        this.popoverEl.style.top = top + 'px';
        this.popoverEl.style.left = left + 'px';
    }

    toggle(e) {
        e.stopPropagation();
        if (this.popoverEl) {
            this.removePopover();
        } else {
            this.createPopover();
            this.positionPopover();
            document.addEventListener('click', this.onDocumentClick);
        }
    }

    removePopover() {
        if (this.popoverEl) {
            this.popoverEl.remove();
            this.popoverEl = null;
            document.removeEventListener('click', this.onDocumentClick);
        }
    }

    onDocumentClick() {
        this.removePopover();
    }
}